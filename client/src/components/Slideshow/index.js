import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// import sliderBackground from '../../images/sliderBackground.jpeg';
import pinocchio from '../../images/pinocchio.jpg'
import wonderWoman from '../../images/wonderWoman.jpg';
import newOTWorld from '../../images/newsOTWorld.jpg';
import monsterHunter from '../../images/monsterHunter.jpg';

const slideImages = [
  pinocchio,
  wonderWoman,
  newOTWorld,
  monsterHunter
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div className='sliderImage' style={{
              'backgroundImage': `url(${slideImages[0]})`,
              'height': '30rem',
              'width': '20rem',
              'marginLeft': 'auto',
              'marginRight': 'auto',
              'marginTop': '5rem',
              'backgroundSize': 'cover',
              'borderRadius': '10px',
              'box-shadow': '0 0 9px rgba(0, 0, 0, 0.7)'
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
              'marginTop': '5rem',
              'backgroundSize': 'cover',
              'borderRadius': '10px',
              'box-shadow': '0 0 9px rgba(0, 0, 0, 0.7)'
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
              'marginTop': '5rem',
              'backgroundSize': 'cover',
              'borderRadius': '10px',
              'box-shadow': '0 0 9px rgba(0, 0, 0, 0.7)'
            }}>
            </div>
          </div>
          <div className="each-slide">
            <div className='sliderImage' style={
              {'backgroundImage': `url(${slideImages[3]})`,
                'height': '30rem',
                'width': '20rem',
                'marginLeft': 'auto',
                'marginRight': 'auto',
                'marginTop': '5rem',
                'backgroundSize': 'cover',
                'borderRadius': '10px',
                'box-shadow': '0 0 9px rgba(0, 0, 0, 0.7)'
                }}>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;