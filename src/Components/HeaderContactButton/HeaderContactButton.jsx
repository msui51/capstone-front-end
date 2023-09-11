import React from 'react'
import './headerContactButton.scss';
import { HashLink } from 'react-router-hash-link';

function HeaderContactButton() {

//contact button for header

  return (
    <>
        <HashLink className='headerContactButton' smooth to='/about#contact'>
            <button className='headerContactButton__button'>Contact Us</button>
        </HashLink>
    </>
  )
}

export default HeaderContactButton