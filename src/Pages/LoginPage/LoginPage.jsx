import React from 'react'
import LogInForm from '../../Components/LogInForm/LogInForm';
import '../../Components/HomePageMain/homePageMain.scss';
import { Link } from 'react-router-dom';
import HomePagePic from '../../Assets/Images/capstone-pic-6.JPG';

function LoginPage() {
  return (
        <main className='homePage'>
          <img className='homePage__pic' src={HomePagePic} alt='people dancing'></img>
          <div className='homePage__wrapper--right'>
            <div className='homePage__wrapper--right--top'>
              <LogInForm/>
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
  )
}

export default LoginPage