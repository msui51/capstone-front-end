import React from 'react';
import './modal.scss';
import { WarningTwoIcon } from '@chakra-ui/icons';

function InvalidUsernameModal({closeModal}) {
//displays if there is no username

  return (
    <div className='modal' onClick={closeModal}>
        <div className='modal__box'>
            <div className='modal__icon-wrapper'>
              <WarningTwoIcon boxSize={30} color='#f18f01'/>
            </div>
            <div className='modal__text-and-button-wrapper'>
              <p className='modal__text'>Please provide a username</p>
              <button className='modal__button' onClick={closeModal}>CLOSE</button>
            </div>        
        </div>
    </div>
  )
}

export default InvalidUsernameModal