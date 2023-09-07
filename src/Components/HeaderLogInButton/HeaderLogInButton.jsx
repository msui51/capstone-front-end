import React from 'react'
import './headerLogInButton.scss';
import { Link } from 'react-router-dom';

function HeaderLogInButton() {
  return (
    <>
        <Link className='headerLogInButton' to='/login'>
            <button className='headerLogInButton__button'>Log In</button>
        </Link>
    </>
  )
}

export default HeaderLogInButton