import React, { useState, useEffect } from 'react'
import './chatPage.scss';
import ChatBody from '../../Components/ChatBody/ChatBody';
import ChatFooter from '../../Components/ChatFooter/ChatFooter';
import Header from '../../Components/Header/Header';
import ChatSideBar from '../../Components/ChatSideBar/ChatSideBar';

function ChatPage({socket}) {
  const [message, setMessage]=useState('');
  const [messageReceived, setMessageReceived]=useState([])
  const [users, setUsers]=useState([]);

  // set message input value

  const handleMessageChange=(e)=>{
    e.preventDefault();
    setMessage(e.target.value);
  }

  // send message to backend and reset message value

 const sendMessage=()=>{
    socket.emit('send_message', {
      message: message,
      name: sessionStorage.getItem('username'),
      id: socket.id,
    });
    setMessage('');
 }


// display message send by sender

 useEffect(()=>{
  socket.on('receive_message',(data)=>{
    setMessageReceived([...messageReceived, data])
  })  
 },[socket, messageReceived])

// display message send by other user/s 

 useEffect(()=>{
  socket.on('newUsers_response', (data)=>{
    setUsers([...users, data])
  })
  console.log(users)
 }, [socket, users])

  return (
    <div className='chatPage'>
      <ChatSideBar users={users}/>
      <div className='chatPage__main'>
          <Header/>
          <ChatBody messageReceived={messageReceived}/>
          <ChatFooter message={message} sendMessage={sendMessage} handleMessageChange={handleMessageChange}/>
      </div>
    </div>
  )  
}

export default ChatPage