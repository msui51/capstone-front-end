import React, { useState, useEffect } from 'react'
import useChat from '../../useChat';
import { useParams } from 'react-router-dom';
import './chatPage.scss';
import ChatBody from '../../Components/ChatBody/ChatBody';
import ChatFooter from '../../Components/ChatFooter/ChatFooter';
import Header from '../../Components/Header/Header';
import ChatSideBar from '../../Components/ChatSideBar/ChatSideBar';

function ChatPage({socket}) {
  const [message, setMessage]=useState('');
  const [messageReceived, setMessageReceived]=useState([])
  const [users, setUsers]=useState([]);
  const handleMessageChange=(e)=>{
    e.preventDefault();
    setMessage(e.target.value);
  }
 const sendMessage=()=>{
    socket.emit('send_message', {
      message: message,
      name: localStorage.getItem('username'),
      id: socket.id,
    });
    setMessage('');
 }

 useEffect(()=>{
  socket.on('receive_message',(data)=>{
    setMessageReceived([...messageReceived, data])
  })  
 },[socket, messageReceived])

 useEffect(()=>{
  socket.on('newUsers_response', (data)=>{
    setUsers([...users, data])
  })
  console.log(users)
 }, [socket, users])


  // const {dj} = useParams();
  // const {messages, sendMessage}=useChat(dj);
  // const [newMessage, setNewMessage]=useState('');
  // const handleNewMessageChange=(e)=>{
  //   setNewMessage(e.target.value);
  // }
  // const handleSendMessage=(e)=>{
  //   e.preventDefault();
  //   setNewMessage(newMessage);
  //   setNewMessage('');
  // }
  // useEffect(()=>{
  //   socket.on('connect', ()=>{
  //     console.log(`you connected with id: ${socket.id}`)
  //   })
  // },[])
  // useEffect(()=>{
  //   socket.on('messageResponse', (msg) => setMessages([...messages, msg]))
  // },[socket,messages])
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
    // <form className='chatPage' onSubmit={handleSendMessage}>
    //   <div className='chatPage__chat-wrapper'>
    //     <ol className='chatPage__chat-list'>
    //       {messages.map((message, index)=>{
    //         <li className={`chatPage__chat-item ${message.ownedByCurrentUser ? 'chatPage__my-chat' : 'chatPage__received-chat'}`} key={index}>
    //           {message.text}
    //         </li> 
    //       })}
    //     </ol>
    //   </div>
    //   <div className='chatPage__input-and-button-wrapper'>
    //   <textarea 
    //   className='chatPage__input'
    //   value={newMessage}
    //   onChange={handleNewMessageChange}
    //   placeholder='input message here...'>  
    //   </textarea>
    //   <button 
    //   className='chatPage__chat-button'
    //   >
    //     Send Message
    //   </button>
    //   </div>
    // </form>
  
}

export default ChatPage