import React from 'react';
import '../../Pages/HomePage/homePage.scss';
import { LockIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './logInForm.scss';
import Modal from '../Modal/Modal';


function LogInForm({socket}) {
const [username, setUsername] = useState('');
const [open, setOpen] = useState(false);
const [age, setAge] = useState('');
const navigate = useNavigate();
// const changeAgeHandler=(e)=>{
//   setAge(e.target.value);
//   console.log(age);
// }
const usernameChangeHandler=(e)=>{
  setUsername(e.target.value);
}
  const checkBelowEighteenAge=()=>{
    const button= document.getElementsByName('age');
    if(button.value === 'no'){
      return true;
    }
    console.log(button.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem('username',username);
    socket.emit('newUser', {username, socketID: socket.id})
    console.log(username)
    navigate('/selections')
    if(checkBelowEighteenAge()){
      setOpen(true)
    }else{
    navigate('/selections');
    }
  }
  // const openModal=()=>{
  //   if(checkBelowEighteenAge()){
  //     setOpen(true);
  //   }
  // }
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