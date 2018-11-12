import React from 'react'
import moment from 'moment'

const Message = ({ message: { author, text, timestamp, avatar } }) => (
  <div>
    <div
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {
        avatar ?
          <img
            style={{
              borderRadius: '50%',
              marginRight: '10px'
            }}
            src={avatar}
            alt="avatar"
          />
          :
          null
      }
      <span>
        {moment(timestamp).format('DD-MM-YY HH:mm:ss')} | {author} | {text}
      </span>
    </div>
    <hr />
  </div>
)

export default Message