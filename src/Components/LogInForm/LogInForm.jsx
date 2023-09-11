import React from 'react';
import '../../Pages/HomePage/homePage.scss';
import { LockIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './logInForm.scss';
import Modal from '../Modal/Modal';


function LogInForm({socket}) {
  const [username, setUsername] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // change username value

  const usernameChangeHandler=(e)=>{
    setUsername(e.target.value);
  }
 
  // check if user is below 18

  const checkBelowEighteenAge=()=>{
    const button= document.getElementsByName('age');
      for(let i = 0; i < button.length; i++) {
        if(button[i].checked && button[i].value == 'no'){
          return true;
        }
      } 
  }

  //check is there's input for username

  const checkInvalidUsername=()=>{
    if(!username){
      return true;
    }
  }
 
//submitting the login form

  const handleSubmit=(e)=>{
    e.preventDefault();
    sessionStorage.setItem('username', username);
    socket.emit('newUsers', {
      name: sessionStorage.getItem('username'),
      id: socket.id,
    })
    if(checkBelowEighteenAge()){
      setOpen(true)
    }else{
    navigate('/selections');
    }
  }

  // closing the modal
  const closeModal=()=>{
    setOpen(false);
  }

  return (
    <div className='logInForm'>
      <div className='logInForm__icon-title-wrapper'>
        <LockIcon className='logInForm__icon' boxSize={30} color='#ff5733'/>
        <h1 className='logInForm__title'>Log In</h1>
      </div>
      <form className='logInForm__form' onSubmit={handleSubmit}>
        <label className='logInForm__text'>Username :</label>
        <input className='logInForm__input' 
          type='text' 
          onChange={usernameChangeHandler}
          value={username}>
        </input><br></br>
        <div className='logInForm__checkbox-text-wrapper'>
          <label className='logInForm__text'>Are you at least 18 years old?</label><br></br>
        </div>
        <div className='logInForm__checkbox-button-wrapper'>
          <input className='logInForm__checkbox' type='radio' name='age' id='yes' value='yes'></input>
          <label className='logInForm__text' for='yes'>Yes</label>
          <input className='logInForm__checkbox' type='radio' id='no' name='age' value='no'></input>
          <label className='logInForm__text' for='no' >No</label><br></br>
        </div>
        <button className='logInForm__button'>Log in</button>
      </form>
      {open ? <Modal closeModal={closeModal}/> : null}
    </div>
  )
}

export default LogInForm