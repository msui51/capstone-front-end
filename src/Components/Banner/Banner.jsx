import React from 'react';
import './banner.scss';

function Banner() {

  //grabbing the username from login form
  
    const username=sessionStorage.getItem('username');
  return (
    <>
        <h1 className='banner'>
            Hi <span className='banner__title--emphasis'>{username}</span>,<br></br>
            what do you want to <span className='banner__title--emphasis'>vibe</span> to?
        </h1>
    </>
  )
}

export default Banner