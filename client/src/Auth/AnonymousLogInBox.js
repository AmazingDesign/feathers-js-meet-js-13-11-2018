import React from 'react'

const AnonymousLogInBox = (props) => (
  <div>
    <h4>Please type your name!</h4>
    <input
      type="text"
      placeholder="Display name"
      onChange={props.onNewNameChange}
      value={props.newName}
    />
    <button
      onClick={props.onLogInClick}
    >
      Anonymous Log In!
    </button>
  </div>
)

export default AnonymousLogInBox