import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'

function App() {
  return (
    <ChatEngine
      height='100vh'
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName='sultan89'
      userSecret={process.env.REACT_APP_USER_SEC}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
