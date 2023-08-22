import React from 'react'
import HomePagePic from '../../Assets/Images/capstone-pic-6.JPG';
import './homePageMain.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';


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
                        : <form className='homePage__login-form'>
                            <div>
                            <label className='homePage__login-text'>Username :</label>
                            <input className='homePage__login-input' type='text' placeholder='create username...'></input><br></br>
                            </div>
                            <div>
                            <label className='homePage__login-text'>Are you at least 18 years old?</label><br></br>
                            </div>
                            <div>
                            <input className='homePage__login-checkbox' type='checkbox' name='yes' id='yes'></input>
                            <label className='homePage__login-text' for='yes'>Yes</label>
                            <input className='homePage__login-checkbox' type='checkbox'></input>
                            <label className='homePage__login-text'>No</label><br></br>
                            </div>
                            <button className='homePage__login-button'>Log in</button>
                          </form>}
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