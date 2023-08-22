import React from 'react'
import HomePagePic from '../../Assets/Images/capstone-pic-6.JPG';
import './homePageMain.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LockIcon } from '@chakra-ui/icons';



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
                    <Link className={!login ? 'homePage__link--login homePage__link--login--glow' : 'homePage__link--login'} to='/login' onClick={clickHandlerChange}>
                        {!login ? <h1 className='homePage__title'>Do you miss times like this?</h1>
                        : <div className='homePage__login-wrapper'>
                            <div className='homePage__login-icon-title-wrapper'>
                                <LockIcon className='homePage__login-icon' boxSize={30} color='#ff5733'/>
                                <h1 className='homePage__login-title'>Log In</h1>
                            </div>
                            <form className='homePage__login-form'>
                            
                            <label className='homePage__login-text'>Username :</label>
                            <input className='homePage__login-input' type='text' placeholder='create username...'></input><br></br>
                            
                            <div>
                            <label className='homePage__login-text'>Are you at least 18 years old?</label><br></br>
                            </div>
                            <div>
                            <input className='homePage__login-checkbox' type='checkbox' name='yes' id='yes' value='yes' ></input>
                            <label className='homePage__login-text' for='yes'>Yes</label>
                            <input className='homePage__login-checkbox' type='checkbox' id='no' name='no' value='no'></input>
                            <label className='homePage__login-text' for='no' >No</label><br></br>
                            </div>
                            <button className='homePage__login-button'>Log in</button>
                          </form>
                          </div>}
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