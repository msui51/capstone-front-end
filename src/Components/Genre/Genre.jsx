import React from 'react';
import './genre.scss';

function Genre({name, image}) {
  return (
    <div className='genre'>
        {name}
    </div>
  )
}

export default Genre