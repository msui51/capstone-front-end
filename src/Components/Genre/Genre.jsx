import React from 'react';
import './genre.scss';

function Genre({name, image}) {
  return (
    <div className='genre'>
        {name}
        <img src={image} alt='rave'></img>
    </div>
  )
}

export default Genre