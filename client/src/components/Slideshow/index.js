import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import sliderBackground from '../../images/sliderBackground.jpeg';
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
              'height': '40rem',
              'width': '30rem',
              'margin-left': 'auto',
              'margin-right': 'auto',
              'margin-top': '5rem',
              'background-size': 'cover',
              'border-radius': '20px'
              }}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div className='sliderImage' style={{
              'backgroundImage': `url(${slideImages[1]})`,
              'height': '40rem',
              'width': '30rem',
              'margin-left': 'auto',
              'margin-right': 'auto',
              'margin-top': '5rem',
              'background-size': 'cover',
              'border-radius': '20px'
              }}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div className='sliderImage' style={{
              'backgroundImage': `url(${slideImages[2]})`,
              'height': '40rem',
              'width': '30rem',
              'margin-left': 'auto',
              'margin-right': 'auto',
              'margin-top': '5rem',
              'background-size': 'cover',
              'border-radius': '20px'
            }}>
              <span>Slide 3</span>
            </div>
          </div>
          <div className="each-slide">
            <div className='sliderImage' style={
              {'backgroundImage': `url(${slideImages[3]})`,
                'height': '40rem',
                'width': '30rem',
                'margin-left': 'auto',
                'margin-right': 'auto',
                'margin-top': '5rem',
                'background-size': 'cover',
                'border-radius': '20px'
                }}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;