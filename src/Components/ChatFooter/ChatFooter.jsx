import React from 'react';
import './chatFooter.scss';
import { useState } from 'react';

function ChatFooter({socket}) {
    const [message, setMessage]=useState('');
    const handleMessageChange=(e)=>{
        setMessage(e.target.value);
    }
    const handleSendMessage=(e)=>{
        e.preventDefault();
        console.log({username: localStorage.getItem('username'), message})
        if(localStorage.getItem('username')){
            socket.emit('message', {
                text:message,
                name:localStorage.getItem('username'),
                socketID:socket.id,
                id: socket.id,
            });
        }
        setMessage('')
    }

  return (
    <form className='chatFooter' onSubmit={handleSendMessage}>
        <textarea className='chatFooter__input'
        type='text'
        placeholder='write message here...'
        value={message}
        onChange={handleMessageChange}
        />
        <button className='chatFooter__button'>SEND</button>
    </form>
  )
}

export default ChatFooter