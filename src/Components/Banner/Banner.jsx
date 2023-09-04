import React from 'react';
import './banner.scss';
import { useLocation } from 'react-router-dom';

function Banner() {
    const location = useLocation();
    const username = location.state;
  return (
    <>
        <h1 className='banner'>
            Hi {username},<br></br>
            what do you want to <span className='banner__title--emphasis'>vibe</span> to?
        </h1>
    </>
  )
}

export default Banner