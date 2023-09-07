import React from 'react'
import './headerContactButton.scss';
import { Link } from 'react-router-dom';

function HeaderContactButton() {
  return (
    <>
        <Link className='headerContactButton' to='/about'>
            <button className='headerContactButton__button'>Contact Us</button>
        </Link>
    </>
  )
}

export default HeaderContactButton