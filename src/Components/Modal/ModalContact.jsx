import React from 'react';
import './modal.scss';
import { WarningTwoIcon } from '@chakra-ui/icons';

function ModalContact({closeContactModal}) {

  // displays if invalid contact form
  
  return (
    <div className='modal modal__contact' onClick={closeContactModal}>
        <div className='modal__box modal__contact-box'>
          <div className='modal__icon-wrapper'>
            <WarningTwoIcon boxSize={30} color='#f18f01'/>
          </div>
          <div className='modal__text-and-button-wrapper modal__contact-text-and-button-wrapper'>
            <p className='modal__text'>Please provide input for all fields</p>
            <button className='modal__button' onClick={closeContactModal}>CLOSE</button>
          </div>
        </div>
    </div>
  )
}

export default ModalContact