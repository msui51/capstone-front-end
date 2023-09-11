import React from 'react';
import './genre.scss';

function Genre({name}) {

//individual genres

  return (
    <div className='genre'>
        {name}
    </div>
  )
}

export default Genre