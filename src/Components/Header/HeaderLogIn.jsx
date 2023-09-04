import React from 'react'
import icon from '../../Assets/Icons/icons8-dance-60.png'
import './header.scss';
import { Link } from 'react-router-dom';

function HeaderLogIn() {
  return (
    <div className='header'>
        <div className="header__wrapper">
            <div className="header__wrapper--left">
                <h1 className='header__title'>Find Your <span className='header__title--different'>Crew</span></h1>
                <img className='header__icon' src={icon} alt='figures dancing'></img>
            </div>
            <div className="header__wrapper--right">
                <Link className='header__link' to='/login'>
                  <button className='header__button'>Log In</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeaderLogIn