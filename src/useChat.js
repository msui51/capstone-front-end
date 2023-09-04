import socketIOClient from 'socket.io-client';
import { useState, useEffect, useRef } from 'react';


const newChatEvent='newChatEvent';
const socketServerUrl='http://localhost:5000';

const useChat=(dj, date)=>{
    const [messages, setMessages]=useState([]);
    const socketRef=useRef();
    useEffect(()=>{
        socketRef.current=socketIOClient(socketServerUrl, {
            query: {dj}
        })
        socketRef.current.on(newChatEvent, (message)=>{
            const incomingMessage={
                ...message,
                ownedByCurrentUser: message.senderId === socketRef.current.id
            }
            setMessages((messages)=>[...messages, incomingMessage])
        }) 
        return()=>{
            socketRef.current.disconnect()
        }
    }, [dj, date])
    const sendMessage=(messageBody)=>{
        socketRef.current.emit(newChatEvent,{
            body:messageBody,
            senderId: socketRef.current.id
        })
    }
    return {messages, sendMessage}
}

export default useChat;