import React from 'react'
import Header from '../../Components/Header/Header'
import AboutPagePic1 from '../../Assets/Images/capstone-pic-1.JPG';
import './aboutPage.scss';

function AboutPage() {
  return (
    <>
      <Header/>
      <main className='about'>
        <div className='about__top-section'>
          <img className='about__pic-1' src={AboutPagePic1} alt='friends hugging'></img>
          <p className='about__text'>Find others that <span className='about__text--different'>love</span> electronic music and dancing as much as you</p>
        </div>
      </main>
    </>
  )
}

export default AboutPage