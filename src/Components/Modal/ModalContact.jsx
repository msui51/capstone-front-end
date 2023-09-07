import React from 'react';
import './modal.scss';

function ModalContact({closeContactModal}) {
  return (
    <div className='modal modal__contact' onClick={closeContactModal}>
        <div className='modal__box modal__contact-box'>
            <p className='modal__text'>Please provide input for all fields</p>
            <button className='modal__button modal__contact-button' onClick={closeContactModal}>CLOSE</button>
        </div>
    </div>
  )
}

export default ModalContact