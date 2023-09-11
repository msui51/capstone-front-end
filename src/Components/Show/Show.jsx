import React from 'react'
import './show.scss';
import { useState } from 'react';

function Show({dj, venue, city, state, date}) {
  const [hover, setHover] = useState(null);

  // change state when mouse is on element

  const mouseOverHoverHandler=()=>{
    setHover(true);
  }

  // change state when mouse os not on element

  const mouseOutHandler=()=>{
    setHover(false);
  }
  return (
    <div className={hover ? 'show show--hover' : 'show'}>
      <p className='show__detail'onMouseOver={mouseOverHoverHandler} onMouseOut={mouseOutHandler}>{dj}</p>
      <p className='show__detail' onMouseOver={mouseOverHoverHandler}onMouseOut={mouseOutHandler}>{venue}</p>
      <p className='show__detail' onMouseOver={mouseOverHoverHandler}onMouseOut={mouseOutHandler}>{city}</p>
      <p className='show__detail' onMouseOver={mouseOverHoverHandler}onMouseOut={mouseOutHandler}>{state}</p>
      <p className='show__detail' onMouseOver={mouseOverHoverHandler}onMouseOut={mouseOutHandler}>{date}</p>
    </div>
  )
}

export default Show