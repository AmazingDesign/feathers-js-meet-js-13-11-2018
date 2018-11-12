import app from '../feathers'

const LOGIN = 'auth/LOGIN'
const LOGOUT = 'auth/LOGOUT'

export const logInAction = (name) => ({
  type: LOGIN,
  name
})

export const anonymousLogInAction = name => ({
  type: LOGIN,
  name
})

export const tryToLogInWithJWT = () => (dispatch, getState) => {
  app.authenticate()
    .then(response => {
      console.log('Authenticated!', response)
      return app.passport.verifyJWT(response.accessToken)
    })
    .then(payload => {
      console.log('JWT Payload', payload)
      return app.service('users').get(payload.userId)
    })
    .then(user => {
      app.set('user', user)
      dispatch(logInAction(user.email))
      console.log('User', app.get('user'))
    })
    .catch((error) => {
      console.log('Login with JWT from local storage failed:', error)
    })
}

export const logInAsyncAction = (email, password) => (dispatch, getState) => {
  // https://docs.feathersjs.com/api/authentication/client.html#appauthenticateoptions
  app.authenticate({
    strategy: 'local',
    email,
    password
  })
    .then(response => {
      console.log('Authenticated!', response)
      return app.passport.verifyJWT(response.accessToken)
    })
    .then(payload => {
      console.log('JWT Payload', payload)
      return app.service('users').get(payload.userId)
    })
    .then(user => {
      app.set('user', user)
      dispatch(logInAction(user.email))
      console.log('User', app.get('user'))
    })
    .catch((error) => {
      console.log(error)
      alert(`Error with log in! Message from server: ${error.data.message}`)
    })
}

const logoutAction = () => ({ type: LOGOUT })

export const logoutAsyncAction = () => (dispatch, getState) => {
  app.logout()
    .then(() => dispatch(logoutAction()))

}

const initialState = {
  user: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.name
      }
    case LOGOUT:
      return {
        ...state,
        user: initialState.user
      }
    default:
      return state
  }
}