import React from 'react'
import "./feature.scss"
function Feature() {
  return (
    <div className='feature'>
        <div className='feature-img'>
          <div className='img-text'>
            Unlock your fashion <br /> Potential
           
           <br /> <button>Try now</button>
            <p className='img-p'>Picture this: You give few details and share your photo, and within seconds, our AI engine generates a selection of outfits that enhance your fashion and complement your personal style. No more hours spent scrolling through countless online stores or wandering aimlessly through crowded malls. With Whatiwear, shopping becomes effortless, enjoyable, and, most importantly, rewarding.
</p>
          </div>
    </div>
    <div className='info'>  
    <span className='first-span'>We are focus on your Style</span>
      <div className='p-info'>
        <p>A cutting-edge AI-powered solution that brings the expertise of a personal stylist right to your fingertips.</p>
        <p>Our intelligent system combines image recognition technology with your input data to curate the perfect wardrobe for you.</p>
      </div>
    </div>
    <div className='style'>
        <div className='style-l'>
            <img src="../../../public/assests/Images/image 1.jpg" alt="" />
            <div className='info-sub'>
            <span>Wiw/Style</span>
            <p>Personalized style recommendations</p>
            </div>

        </div>
        <div className='style-r'>
        <img src="../../../public/assests/Images/closet 1.jpg" alt="" />
            <div className='info-sub2'>
            <span>Wardrobe</span>
            <p>Elevate your looks from your own wardrobe</p>
            </div>
        </div>
    </div>
    <div className='feature-bottom'>
      <p>“At Whatiwear, we believe that personal style should be accessible to everyone”</p>
    </div>
    </div>
  )
}

export default Feature