import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// import sliderBackground from '../../images/sliderBackground.jpeg';
import sliderImageOne from '../../images/sliderImageOne.jpg'
import sliderImageTwo from '../../images/sliderImageTwo.jpg';
import sliderImageThree from '../../images/sliderImageThree.jpg';
import sliderImageFour from '../../images/sliderImageFour.jpg';

const slideImages = [
  sliderImageOne,
  sliderImageTwo,
  sliderImageThree,
  sliderImageFour
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div className='sliderImage' style={{
              'backgroundImage': `url(${slideImages[0]})`,
              'height': '30rem',
              'width': '60rem',
              'marginLeft': 'auto',
              'marginRight': 'auto',
              'marginTop': '5rem',
              'backgroundSize': 'cover',
              'boxShadow': '0 0 9px rgba(0, 0, 0, 0.7)'
              }}>
            </div>
          </div>
          <div className="each-slide">
            <div className='sliderImage' style={{
              'backgroundImage': `url(${slideImages[1]})`,
              'height': '30rem',
              'width': '60rem',
              'marginLeft': 'auto',
              'marginRight': 'auto',
              'marginTop': '5rem',
              'backgroundSize': 'cover',
              'boxShadow': '0 0 9px rgba(0, 0, 0, 0.7)'
              }}>
            </div>
          </div>
          <div className="each-slide">
            <div className='sliderImage' style={{
              'backgroundImage': `url(${slideImages[2]})`,
              'height': '30rem',
              'width': '60rem',
              'marginLeft': 'auto',
              'marginRight': 'auto',
              'marginTop': '5rem',
              'backgroundSize': 'cover',
              'boxShadow': '0 0 9px rgba(0, 0, 0, 0.7)'
            }}>
            </div>
          </div>
          <div className="each-slide">
            <div className='sliderImage' style={
              {'backgroundImage': `url(${slideImages[3]})`,
                'height': '30rem',
                'width': '60rem',
                'marginLeft': 'auto',
                'marginRight': 'auto',
                'marginTop': '5rem',
                'backgroundSize': 'cover',
                'boxShadow': '0 0 9px rgba(0, 0, 0, 0.7)'
                }}>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;