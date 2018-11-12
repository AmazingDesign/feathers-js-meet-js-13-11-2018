import React from 'react'

const NewMessageBox = (props) => (
  <div>
    <input
      type="text"
      placeholder="Type message"
      onChange={props.onNewMessageChange}
      value={props.newMessageText}
    />
    <button
      onClick={props.onSendCLick}
    >
      SEND!
    </button>
  </div>
)

export default NewMessageBox