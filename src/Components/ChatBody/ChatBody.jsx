import React from 'react';
import './chatBody.scss';

function ChatBody({messageReceived}) {

//display messages from user and recipient 

  return (
    <div className='chatBody'>
        {messageReceived.map((message)=>
        message.name === sessionStorage.getItem('username') ? (
        <div className='chatBody__messages'key={message.id}>
            <p className='chatBody__name' >{message.name}</p>
            <div className='chatBody__message chatBody__message-sender'>
                <p>{message.message}</p>
            </div>
        </div>
        ) : (
        <div className='chatBody__messages chatBody__messages-recipient' key={message.id}>
            <p className='chatBody__name'>{message.name}</p>
            <div className='chatBody__message chatBody__message-recipient'>
                <p>{message.message}</p>
            </div>
        </div>
        ))}
    </div>
    
  )
}

export default ChatBody