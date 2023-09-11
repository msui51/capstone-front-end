import React from 'react'
import Header from '../../Components/Header/Header';
import AboutPagePic2 from '../../Assets/Images/capstone-pic-1.JPG';
import './aboutPage.scss';
import AboutPagePic1 from '../../Assets/Images/capstone-pic-7.jpg';
import Contact from '../../Components/Contact/Contact';

function AboutPage() {

  //about page includes contact form
  
  return (
    <>
      <Header/>
      <main className='about'>
        <div className='about__top-section'>
          <img className='about__pic' src={AboutPagePic1} alt='friends hugging'></img>
          <p className='about__text'>Find others that <span className='about__text--different'>love</span> electronic music and dancing as much as you</p>
        </div>
        <div className='about__bottom-section'>
          <p className='about__text about__text--bottom'>Nothing beats sharing the experience with others</p>
          <img className='about__pic about__pic--bottom' src={AboutPagePic2} alt='person showing heart shape with hands'></img>
        </div>
      </main>
      <Contact/>
    </>
  )
}

export default AboutPage