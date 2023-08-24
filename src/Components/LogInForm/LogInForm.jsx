import React from 'react';
import '../HomePageMain/homePageMain.scss';
import { LockIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function LogInForm() {
const [username, setUsername] = useState('');
const usernameChangeHandler=(e)=>{
  setUsername(e.target.value);
}

  return (
    <div className='homePage__login-wrapper'>
                            <div className='homePage__login-icon-title-wrapper'>
                                <LockIcon className='homePage__login-icon' boxSize={30} color='#ff5733'/>
                                <h1 className='homePage__login-title'>Log In</h1>
                            </div>
                            <form className='homePage__login-form'>
                            
                            <label className='homePage__login-text'>Username :</label>
                            <input className='homePage__login-input' type='text' onChange={usernameChangeHandler} value={username}></input><br></br>
                            
                            <div>
                            <label className='homePage__login-text'>Are you at least 18 years old?</label><br></br>
                            </div>
                            <div>
                            <input className='homePage__login-checkbox' type='radio' name='age' id='yes' value='yes'></input>
                            <label className='homePage__login-text' for='yes'>Yes</label>
                            <input className='homePage__login-checkbox' type='radio' id='no' name='age' value='no'></input>
                            <label className='homePage__login-text' for='no' >No</label><br></br>
                            </div>
                            <button className='homePage__login-button'>Log in</button>
                          </form>
                          </div>
  )
}

export default LogInForm