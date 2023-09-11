import React from 'react';
import './chatSideBar.scss'

function ChatSideBar({users}) {

  //display active users
   
  return (
    <div className='chatSideBar'>
        <div className='chatSideBar__wrapper'>
            <h2 className='chatSideBar__title'>Active Users</h2>
            <div className='chatSideBar__users'>
                {users.map((user)=>(
                    <p className='chatSideBar__user' key={user.id}>{user.name}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ChatSideBar