import React from 'react';
import './contact.scss';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate();

  const nameChangeHandler=(e)=>{
    setName(e.target.value);
    console.log(name);
  }
  const emailChangeHandler=(e)=>{
    setEmail(e.target.value);
    console.log(email);
  }
  const messageChangeHandler=(e)=>{
    setMessage(e.target.value);
    console.log(message);
  }
  const navigateHome=(e)=>{
    e.preventDefault();
    navigate('/');
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(!name || !email || !message){
      alert('please fill out all fields');
    }
    axios.post('http://localhost:5000/contact', {
      name:name,
      email_address: email,
      message: message,
    })
    .then((res)=>{
    console.log(res);
    navigate('/login');
    return res.data;
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className='contact'>
        <h1 className='contact__title' id='contact'>Contact Us</h1>
        <div className='contact__form-wrapper'>
          <p>Please fill out this form and we'll get back to you as soon as possible</p>
            <form className='contact__form' onSubmit={handleSubmit}>
                <input 
                  className='contact__input'
                  type='text'
                  id='name'
                  name='name'
                  value={name}
                  onChange={nameChangeHandler}>   
                </input>
                <label 
                  className='contact__label'
                  for='name'>
                    Name
                </label>
                <input 
                  className='contact__input'
                  type='email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={emailChangeHandler}>
                </input>
                <label 
                  className='contact__label'
                  for='email-address'>
                    Email Address
                </label>
                <input 
                  className='contact__input contact__input--long'
                  type='text'
                  id='message'
                  name='message'
                  value={message}
                  onChange={messageChangeHandler}></input>
                <label 
                  className='contact__label'
                  for='message'>
                    Message
                </label>
                <div className='contact__button-wrapper'>
                    <button className='contact__button contact__button-send' type='submit'>Send</button>
                    <button className='contact__button contact__button-cancel' type='submit' onClick={navigateHome}>Cancel</button>
                </div>
            </form>
        </div>
    </div>    
    
  )
}

export default Contact