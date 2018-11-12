import React from 'react'

const PasswordLogInBox = (props) => (
  <div>
    <h4>Please type your credentials!</h4>
    <input
      type="text"
      placeholder="E-mail"
      onChange={props.onEmailChange}
      value={props.email}
    />
    <input
      type="password"
      placeholder="Password"
      onChange={props.onPasswordChange}
      value={props.password}
    />
    <button
      onClick={props.onLogInClick}
    >
      Log In!
    </button>
  </div>
)

export default PasswordLogInBox