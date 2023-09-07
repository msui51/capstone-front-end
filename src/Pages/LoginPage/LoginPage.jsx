import React from 'react'
import LogInForm from '../../Components/LogInForm/LogInForm';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import HomeImg from '../../Components/HomeImg/HomeImg';
import '../LoginPage/loginPage.scss';
import Modal from '../../Components/Modal/Modal';

function LoginPage({socket}) {
  // const [open, setOpen] = useState(false);
  // const checkBelowEighteenAge=()=>{
  //   const button= document.getElementsByName('age');
  //   if(button.checked === 'no'){
  //     return true;
  //   }
  // }
  // const openModal=()=>{
  //   if(checkBelowEighteenAge){
  //     setOpen(true);
  //   }
  // }
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
                <Link className='loginPage__footer-link'>
                  <small className='loginPage__footer-text'>Contact Us</small>
                </Link>
              </footer>
            </div>
          </div>
        </main>
  )
}

export default LoginPage