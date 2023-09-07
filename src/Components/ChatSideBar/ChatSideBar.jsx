import React from 'react';
import './chatSideBar.scss'
import { useState, useEffect } from 'react';

function ChatSideBar({socket}) {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        socket.on('newUserResponse', (users)=> setUsers(users));
    },[socket, users])

  return (
    <div className='chatSideBar'>
        <div className='chatSideBar__wrapper'>
            <h2 className='chatSideBar__title'>Active Users</h2>
            <div className='chatSideBar__users'>
                {users.map((user)=>(
                    <p className='chatSideBar__user' key={user.socketID}>{user.username}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ChatSideBar