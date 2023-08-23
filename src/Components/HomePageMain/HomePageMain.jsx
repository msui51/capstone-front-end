import React from 'react'
import HomePagePic from '../../Assets/Images/capstone-pic-6.JPG';
import './homePageMain.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LogInForm from '../LogInForm/LogInForm';



function HomePageMain() {
    const [login, setLogin]=useState(false);
    const clickHandlerChange=()=>{
        setLogin(true);
    }
    
    
  return (
    <>
        <main className='homePage'>
            <img className='homePage__pic' src={HomePagePic} alt='people dancing'></img>
            <div className='homePage__wrapper--right'>
                <div className='homePage__wrapper--right--top'>
                    <Link className='homePage__link--login' to='/login' onClick={clickHandlerChange}>
                        {!login ? <h1 className='homePage__title'>Do you miss times like this?</h1>
                        : <LogInForm/>}
                    </Link>
                </div>
                <div className='homePage__wrapper--right--bottom'>
                    <footer className='homePage__footer'>
                        <Link className='homePage__footer-link' to='/about'>
                            <small className='homePage__footer-text'>About Us</small>
                        </Link>
                        <Link className='homePage__footer-link' to='/about'>
                            <small className='homePage__footer-text'>Contact Us</small>
                        </Link>
                    </footer>
                </div>
            </div>
        </main>
    </>
  )
}

export default HomePageMain