import React from 'react'
import './headerLeaveChatButton.scss';
import { Link, useNavigate } from 'react-router-dom';

function HeaderLeaveChatButton() {
    const navigate = useNavigate();

  //going back to previous page

    const backPage=()=>{
        navigate(-1);
    }
  return (
    <>
        <Link className='headerLeaveChatButton' to='/'>
            <button className='headerLeaveChatButton__button' onClick={backPage}>Leave Chat</button>
        </Link>
    </>
  )
}

export default HeaderLeaveChatButton