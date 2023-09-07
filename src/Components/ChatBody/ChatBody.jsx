import React from 'react';
import './chatBody.scss';

function ChatBody({messages}) {
  return (
    
    <div className='chatBody'>
        {messages.map((message)=>
        message.name === localStorage.getItem('username') ? (
        <div className='chatBody__messages'key={message.id}>
            <p className='chatBody__name' >{message.name}</p>
            <div className='chatBody__message chatBody__sender'>
                <p>{message.text}</p>
            </div>
        </div>
        ) : (
        <div className='chatBody__messages' key={message.id}>
            <p className='chatBody__name'>{message.name}</p>
            <div className='chatBody__message chatBody__recipient'>
                <p>{message.text}</p>
            </div>
        </div>
        ))}
    </div>
    
  )
}

export default ChatBody