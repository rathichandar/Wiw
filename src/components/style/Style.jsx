import React from 'react'
import "./style.scss"
function Style() {
  return (
    <div className='style'>
      <div className='first'>
        <p className='first-p'> Wear Different </p>
        <div className='first-main'>
          <div className='first-ml'>
            <span className='style'>STYLE</span>

            <div className='ml-info'>
              <div className='info-sub'>
                <img src="../../../public/assests/Images/style-logo/Vector.jpg" alt="" />
                <span className='logo-info'>Tell us about your self</span>
              </div>
              <div className='info-sub'>
                <img src="../../../public/assests/Images/style-logo/Vector (1).jpg" alt="" />
                <span className='logo-info'>upload your image</span>
              </div>
              <div className='info-sub'>
                <img src="../../../public/assests/Images/style-logo/Vector (4).jpg" alt="" />
                <img src="../../../public/assests/Images/style-logo/Vector (2).jpg" alt="" />
                <span className='logo-info'>System analyze the data </span>
              </div>
              <div className='info-sub'>
                <img src="../../../public/assests/Images/style-logo/Vector (3).jpg" alt="" />
                <span className='logo-info'>Suggest personalized clothes</span>
              </div>
              <span className='how'>
                Using computer vison and advanced algorithms , our designer <br /> assistant find best possible clothes for you.
              </span>
            </div>
          </div>
          <div className='first-mr'>
            <img src="../../../public/assests/Images/style.jpg" className='style-img' alt="" />
          </div>
        </div>
      </div>


  

      <div className='second'>
      <p className='second-p'> Your daily fashion choices </p>
          <div className='second-main'>
            <div className='second-ml'>
              <img src="../../../public/assests/Images/wardrop.jpg" className='style-img' alt="" />
            </div>
            <div className='second-mr'>
              <span className='style'>WARDROBE</span>

              <div className='ml-info'>
                <div className='info-sub'>
                  <img src="../../../public/assests/Images/wardrop-logo/Vector (5).jpg" alt="" />
                  <span className='logo-info'>Tell us about your self</span>
                </div>
                <div className='info-sub'>
                  <img src="../../../public/assests/Images/wardrop-logo/Vector (6).jpg" alt="" />
                  <span className='logo-info'>upload your image</span>
                </div>
                <div className='info-sub'>
                  <img src="../../../public/assests/Images/wardrop-logo/Vector (7).jpg" alt="" />
                  <span className='logo-info'>System analyze the data </span>
                </div>
                <div className='info-sub'>
                  <img src="../../../public/assests/Images/wardrop-logo/Vector (8).jpg" alt="" />
                  <span className='logo-info'>Suggest personalized clothes</span>
                </div>
                <span className='how'>
                With a simple snap of your wardrobe clothes, our advanced AI <br /> technology analyzes your clothes and provides you <br /> with personalized  outfit recommendations  assistant find best possible clothes for you.
                </span>
              </div>

            </div>
          </div>
        

      </div>

      <div className='desc'>
      Effortless Elegance: Say Goodbye to Fashion Dilemmas! Let Whatiwear Be Your Personal Stylist, Simplifying Your Wardrobe Choices
      </div>
      <div className='last-cta'>
        <div className='cta-left'>
          <p className='left-span'>Ready to redefine your style?</p>
          <p className='left-p'>Experience the future of fashion with Whatiwear today!</p>
        </div>

        <button className='cta-right'>  Explore</button>
      </div>
    </div>
  )
}

export default Style