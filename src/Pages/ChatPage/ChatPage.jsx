import React, { useState } from 'react'
import useChat from '../../useChat';
import { useParams } from 'react-router-dom';

function ChatPage() {
  const {dj, date} = useParams();
  const {messages, sendMessage}=useChat(dj, date);
  const [newMessage, setNewMessage]=useState('');
  const handleNewMessageChange=(e)=>{
    setNewMessage(e.target.value);
  }
  const handleSendMessage=()=>{
    setNewMessage(newMessage);
    setNewMessage('');
  }
  return (
    <div className='chatPage'>
      <div className='chatPage__chat-wrapper'>
        <ol className='chatPage__chat-list'>
          {messages.map((message, index)=>{
            <li className={`chatPage__chat-item ${message.ownedByCurrentUser ? 'my-chat' : 'received-chat'}`} key={index}>
              {message.body}
            </li> 
          })}
        </ol>
      </div>
      <input 
      className='chatPage__input'
      value={newMessage}
      onChange={handleNewMessageChange}
      placeholder='input message here...'>  
      </input>
      <button 
      className='chatPage__chat-button'
      onClick={handleSendMessage}>
        Send Message
      </button>
    </div>
  )
}

export default ChatPage