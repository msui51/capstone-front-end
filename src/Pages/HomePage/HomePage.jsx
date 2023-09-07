import React from 'react'
import './homePage.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import LogInForm from '../../Components/LogInForm/LogInForm';
import HomeImg from '../../Components/HomeImg/HomeImg';
import LoginPage from '../LoginPage/LoginPage';

function HomePage({socket}) {
  const location = useLocation();

  return (
    <>
      <main className='homePage'>
            <HomeImg/>
            <div className='homePage__wrapper--right'>
                <div className='homePage__wrapper--right--top'>
                <Link className='homePage__link--login' to='/login'> 
                    {location.pathname === '/' ? <h1 className='homePage__title'>Do you miss times like this?</h1>
                        : location.pathname === '/login' ? <LoginPage socket={socket}/>
                        : null}
                </Link>   
                    {/* // <Link className='homePage__link--login' to='/login' onClick={clickHandlerChange}>
                    //     {!login ? <h1 className='homePage__title'>Do you miss times like this?</h1> */}
                    {/* //     : login ? <LogInForm socket={socket}/>
                    //     : location.pathname === '/login' ? <LogInForm socket={socket}/>
                    //     : null}
                    // </Link> */}
                </div>
            </div>
        </main>
    </>
  )
}

export default HomePage