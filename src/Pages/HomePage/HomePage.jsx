import React from 'react'
import './homePage.scss';
import { Link, useLocation } from 'react-router-dom';
import HomeImg from '../../Components/HomeImg/HomeImg';
import LoginPage from '../LoginPage/LoginPage';

function HomePage() {
  
  // grabbing url path

  const location = useLocation();

  return (
    <>
      <main className='homePage'>
            <HomeImg/>
            <div className='homePage__wrapper--right'>
                <div className='homePage__wrapper--right--top'>
                <Link className='homePage__link--login' to='/login'> 
                    {location.pathname === '/' ? <h1 className='homePage__title'>Do you miss times like this?</h1>
                        : location.pathname === '/login' ? <LoginPage />
                        : null}
                </Link>   
                </div>
            </div>
        </main>
    </>
  )
}

export default HomePage