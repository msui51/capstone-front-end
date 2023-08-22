import React from 'react'
import icon from '../../Assets/Icons/icons8-dance-60.png'
import './header.scss';

function Header() {
  return (
    <div className='header'>
        <div className="header__wrapper">
            <div className="header__wrapper--left">
                <h1 className='header__title'>You Should be Dancing</h1>
                <img className='header__icon' src={icon} alt='figures dancing'></img>
            </div>
            <div className="header__wrapper--right">
                <button className='header__button'>Log In</button>
            </div>
        </div>
    </div>
  )
}

export default Header