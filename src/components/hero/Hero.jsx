
import React from 'react'
import "./hero.scss"

function Hero() {
  return (
    <div className = "hero">

        <img src='../../../public/assests/Images/Hero.jpg' />

        <div className='desc'>
            <p>
            From just a few parameters we are ready to present best personalized outfits. 
            </p>
            <p>
            Whatiwear is the AI-based personalized outfits recommendation system.
             </p>
            <p>With Whatiwear, you can effortlessly look stylish and feel confident in their outfit choices.</p>



        </div>
      <div className='hero-bottom'>
        <div className='hero-left'>
        <p className='left-p'>How it works?</p>
        <div className='left-info'>
          <img src="../../../public/assests/Images/hero-logo/account_circle.jpg" className='hero-logo' alt="" />
          <span>create free account</span>
          </div> <br />
          <div className='left-info'>
          <img src="../../../public/assests/Images/hero-logo/contact_page.jpg" className='hero-logo' alt="" />
          <span>Tell us about yourself</span>
          </div> <br />
          <div className='left-info'>
          <img src="../../../public/assests/Images/hero-logo/Group.jpg" className='hero-logo' alt="" />
          <span>personalized cloth suggestion</span>
          </div>  
          <div className='button'>
          <span>\</span>
          <span>TryNow</span>
          </div>
        </div>
        <div className='hero-right'>
          <img src='../../../public/assests/Images/Model.jpg' alt='no preview'/>
        </div>
 
        </div>
        <p className='bottom-p'>We are your personal stylist.</p>

    </div>
  )
}

export default Hero