import React from 'react';
import './contact.scss';

function Contact() {
  return (
    
    <div className='contact'>
        <h1 className='contact__title'>Contact Us</h1>
        <div className='contact__form-wrapper'>
            <form className='contact__form'>
                <input className='contact__input'></input>
                <label for='name'>Name</label>
                <input className='contact__input'></input>
                <label for='email'>Email Address</label>
                <input className='contact__input contact__input--long'></input>
                <label for='message'>message</label>
                <div className='contact__button-wrapper'>
                    <button className='contact__button contact__button-send' type='submit'>Send</button>
                    <button className='contact__button contact__button-cancel' type='submit'>Cancel</button>
                </div>
            </form>
        </div>
    </div>    
    
  )
}

export default Contact