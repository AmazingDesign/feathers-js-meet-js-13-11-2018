import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import auth, { tryToLogInWithJWT } from './state/auth'
import messages from './state/messages'

const reducer = combineReducers({
  auth,
  messages
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

// if we want to persist session of logged user 
// store.dispatch(tryToLogInWithJWT())