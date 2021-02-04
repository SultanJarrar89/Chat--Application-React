import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import OtherMessage from './OtherMessage'

function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props
  const chat = chats && chats[activeChat]

  const renderMessages = () => {
    const keys = Object.keys(messages)
    keys.map((key, idx) => {
      const message = messages[key]
      const lastMessageKey = idx === 0 ? null : keys[idx - 1]
      const isMyMessage = userName === message.sender.userName
      return (
        <div key={`msg_${idx}`} style={{ width: '100%' }}>
          <div className='message-block'>
            {isMyMessage ? <MyMessage /> : <OtherMessage />}
          </div>
          <div
            className='read-receipts'
            style={{
              marginRight: isMyMessage ? '18px' : '0px',
              marginLeft: isMyMessage ? '0px' : '68px',
            }}
          >
            read-receipts
          </div>
        </div>
      )
    })
  }
  if (!chat) return 'Loading...'
  return (
    <div className='chat-feed'>
      <div className='chat-title-container'>
        <div className='chat-title'>{chat?.title}</div>
      </div>
    </div>
  )
}

export default ChatFeed
