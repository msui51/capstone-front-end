import React from 'react';
import './modal.scss';
import { WarningTwoIcon } from '@chakra-ui/icons';

function UnderageModal({closeModal}) {
//displays if age is below 18

  return (
    <div className='modal' onClick={closeModal}>
        <div className='modal__box'>
            <div className='modal__icon-wrapper'>
              <WarningTwoIcon boxSize={30} color='#f18f01'/>
            </div>
            <div className='modal__text-and-button-wrapper'>
              <p className='modal__text'>Sorry, <br></br>unfortunately you do have to be at least 18 years old to log in.</p>
              <button className='modal__button' onClick={closeModal}>CLOSE</button>
            </div>        
        </div>
    </div>
  )
}

export default UnderageModal