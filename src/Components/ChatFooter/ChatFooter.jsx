import React from 'react';
import './chatFooter.scss';

function ChatFooter({ message, sendMessage, handleMessageChange}) {

//write and send message

  return (
    <div className='chatFooter'>
        <textarea className='chatFooter__input'
        type='text'
        placeholder='write message here...'
        value={message}
        onChange={handleMessageChange}
        />
        <button className='chatFooter__button' onClick={sendMessage}>SEND</button>
    </div>
  )
}

export default ChatFooter