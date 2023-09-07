import React from 'react';
import './chatBody.scss';

function ChatBody({messageReceived}) {
  return (
    <div className='chatBody'>
        {messageReceived.map((message)=>
        message.name === localStorage.getItem('username') ? (
        <div className='chatBody__messages'key={message.id}>
            <p className='chatBody__name' >{message.name}</p>
            <div className='chatBody__message chatBody__sender'>
                <p>{message.message}</p>
            </div>
        </div>
        ) : (
        <div className='chatBody__messages' key={message.id}>
            <p className='chatBody__name'>{message.name}</p>
            <div className='chatBody__message chatBody__recipient'>
                <p>{message.message}</p>
            </div>
        </div>
        ))}
    </div>
    
  )
}

export default ChatBody