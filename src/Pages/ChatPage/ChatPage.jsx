import React, { useState, useEffect } from 'react'
import useChat from '../../useChat';
import { useParams } from 'react-router-dom';
import './chatPage.scss';
import ChatBody from '../../Components/ChatBody/ChatBody';
import ChatFooter from '../../Components/ChatFooter/ChatFooter';
import Header from '../../Components/Header/Header';
import ChatSideBar from '../../Components/ChatSideBar/ChatSideBar';

function ChatPage({socket}) {
  const [messages, setMessages]=useState([]);

  useEffect(()=>{
    socket.on('connect', ()=>{
      console.log(`you connected with id: ${socket.id}`)
    })
  },[])
  useEffect(()=>{
    socket.on('messageResponse', (msg) => setMessages([...messages, msg]))
  },[socket,messages])
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
  return (
    <div className='chatPage'>
      <ChatSideBar socket={socket}/>
      <div className='chatPage__main'>
          <Header/>
          <ChatBody messages={messages}/>
          <ChatFooter socket={socket}/>
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