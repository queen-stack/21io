import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// import sliderBackground from '../../images/sliderBackground.jpeg';
import sliderImageOne from '../../images/sliderImageOne.jpg'
import sliderImageTwo from '../../images/sliderImageTwo.jpg';
import sliderImageThree from '../../images/sliderImageThree.jpg';

const slideImages = [
  sliderImageOne,
  sliderImageTwo,
  sliderImageThree
];
const properties = {
  indicators: true,
  arrows: false
}
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div className='sliderImage' style={{
              'backgroundImage': `url(${slideImages[0]})`,
              'height': '30rem',
              'width': '20rem',
              'marginLeft': 'auto',
              'marginRight': 'auto',
              'marginTop': '3rem',
              'backgroundSize': 'cover',
              'boxShadow': '0 0 50px rgba(0, 0, 0, 0.7)'
              }}>
            </div>
          </div>
          <div className="each-slide">
            <div className='sliderImage' style={{
              'backgroundImage': `url(${slideImages[1]})`,
              'height': '30rem',
              'width': '20rem',
              'marginLeft': 'auto',
              'marginRight': 'auto',
              'marginTop': '3rem',
              'backgroundSize': 'cover',
              'boxShadow': '0 0 50px rgba(0, 0, 0, 0.7)'
              }}>
            </div>
          </div>
          <div className="each-slide">
            <div className='sliderImage' style={{
              'backgroundImage': `url(${slideImages[2]})`,
              'height': '30rem',
              'width': '20rem',
              'marginLeft': 'auto',
              'marginRight': 'auto',
              'marginTop': '3rem',
              'backgroundSize': 'cover',
              'boxShadow': '0 0 50px rgba(0, 0, 0, 0.7)'
            }}>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;