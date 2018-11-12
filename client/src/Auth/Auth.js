import React from 'react'

import AnonymousLogInBox from './AnonymousLogInBox'
import PasswordLogInBox from './PasswordLogInBox'

import { connect } from 'react-redux'
import { logInAsyncAction, anonymousLogInAction } from '../state/auth'

class Auth extends React.Component {
  state = {
    anonymousName: '',
    email: '',
    password: ''
  }

  makeInputChangeHandler = (statePropName) => (event) => this.setState({
    [statePropName]: event.target.value
  })

  anonymousLogInHandler = () => {
    if (!this.state.anonymousName) {
      alert('Please type your name!')
      return
    }

    this.props._anonymousLogInAction(this.state.anonymousName)
  }

  logInHandler = () => {
    if (
      !this.state.email ||
      !this.state.password
    ) {
      alert('Please type your email and password!')
      return
    }

    this.props._logInAsyncAction(this.state.email, this.state.password)
  }

  render() {
    return (
      this.props._user ?
        this.props.children
        :
        <div>
          <AnonymousLogInBox
            onLogInClick={this.anonymousLogInHandler}
            onNewNameChange={this.makeInputChangeHandler('anonymousName')}
            newName={this.state.anonymousName}
          />
          <PasswordLogInBox
            onLogInClick={this.logInHandler}
            onEmailChange={this.makeInputChangeHandler('email')}
            onPasswordChange={this.makeInputChangeHandler('password')}
            newName={this.state.newName}
          />
        </div>
    )
  }
}

const mapStateToProps = state => ({
  _user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  _logInAsyncAction: (email, password) => dispatch(logInAsyncAction(email, password)),
  _anonymousLogInAction: name => dispatch(anonymousLogInAction(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)