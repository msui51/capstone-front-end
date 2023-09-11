import React from 'react';
import './homeImg.scss';
import HomePagePic from '../../Assets/Images/capstone-pic-6.JPG';

function HomeImg() {

//home page img

  return (
    <>
        <img className='homeImg' src={HomePagePic} alt='people dancing'></img>
    </>
  )
}

export default HomeImg