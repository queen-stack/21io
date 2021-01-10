import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

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
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;