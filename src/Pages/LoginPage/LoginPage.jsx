import React from 'react'
import LogInForm from '../../Components/LogInForm/LogInForm';
import { Link } from 'react-router-dom';
import HomeImg from '../../Components/HomeImg/HomeImg';
import '../LoginPage/loginPage.scss';
import { HashLink } from 'react-router-hash-link';

function LoginPage({socket}) {

  //includes home image and log in form
  
  return (
        <main className='loginPage'>
          <HomeImg/>
          <div className='loginPage__wrapper--right'>
            <div className='loginPage__wrapper--right--top'>
              <LogInForm socket={socket}/>
            </div>
            <div className='loginPage__wrapper--right--bottom'>
              <footer className='loginPage__footer'>
                <Link className='loginPage__footer-link' to='/about'>
                  <small className='loginPage__footer-text'>About Us</small>
                </Link>
                <HashLink className='loginPage__footer-link' smooth to='/about#contact'>
                  <small className='loginPage__footer-text'>Contact Us</small>
                </HashLink>
              </footer>
            </div>
          </div>
        </main>
  )
}

export default LoginPage