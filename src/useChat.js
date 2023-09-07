import socketIOClient from 'socket.io-client';
import { useState, useEffect, useRef } from 'react';


// const useChat=(dj)=>{
//     const [messages, setMessages]=useState([]);
//     const socketRef=useRef();
//     useEffect(()=>{
//         socketRef.current=socketIOClient('http://localhost:5000', {
//             query: {dj}
//         })
//         socketRef.current.on('newChat', (message)=>{
//             const incomingMessage={
//                 ...message,
//                 ownedByCurrentUser: message.senderId === socketRef.current.id
//             }
//             setMessages((messages)=>[...messages, incomingMessage])
//         }) 
//         return()=>{
//             socketRef.current.disconnect()
//         }
//     }, [socketRef,messages])
//     const sendMessage=(messages)=>{
//         socketRef.current.emit('newChat',{
//             body:messages,
//             senderId: socketRef.current.id
//         })
//     }
//     return {messages, sendMessage}
// }

// export default useChat;