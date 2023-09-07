import React from 'react';
import './modal.scss';

function Modal({closeModal}) {
  return (
    <div className='modal' onClick={closeModal}>
        <div className='modal__box'>
            <p className='modal__text'>Sorry, <br></br>unfortunately you do have to be 18 years old to log in.</p>
            <button className='modal__button' onClick={closeModal}>CLOSE</button>
        </div>
    </div>
  )
}

export default Modal