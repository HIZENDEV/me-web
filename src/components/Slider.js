import React from 'react';
import { Fade } from 'react-slideshow-image';

import Slide01 from '../assets/slide_01.jpg';
import Slide02 from '../assets/slide_02.jpg';
import Slide03 from '../assets/slide_03.jpg';
import Slide04 from '../assets/slide_04.jpg';
import Slide05 from '../assets/slide_05.jpg';
import Slide06 from '../assets/slide_06.jpg';

const fadeImages = [
  Slide01,
  Slide02,
  Slide05,
  Slide03,
  Slide04,
  Slide06
];

const shuffleImages = shuffle()

function shuffle() {
  let currentIndex = fadeImages.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = fadeImages[currentIndex];
    fadeImages[currentIndex] = fadeImages[randomIndex];
    fadeImages[randomIndex] = temporaryValue;
  }
  console.log(fadeImages)
  return fadeImages;
}

const fadeProperties = {
  duration: 5000,
  transitionDuration: 2000,
  infinite: true,
  indicators: false // WARNING: is .nav => display: false
}

const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <h1 className="MobileIndication">Scroll Down</h1>
        <div className="image-container">
          <img alt="" src={shuffleImages[0]} />
        </div>
      </div>
      <div className="each-fade">
      <h1 className="MobileIndication">Scroll Down</h1>
        <div className="image-container">
          <img alt="" src={shuffleImages[1]} />
        </div>
      </div>
      <div className="each-fade">
      <h1 className="MobileIndication">Scroll Down</h1>
        <div className="image-container">
          <img alt="" src={shuffleImages[2]} />
        </div>
      </div>
      <div className="each-fade">
      <h1 className="MobileIndication">Scroll Down</h1>
        <div className="image-container">
          <img alt="" src={shuffleImages[3]} />
        </div>
      </div>
      <div className="each-fade">
      <h1 className="MobileIndication">Scroll Down</h1>
        <div className="image-container">
          <img alt="" src={shuffleImages[4]} />
        </div>
      </div>
      <div className="each-fade">
      <h1 className="MobileIndication">Scroll Down</h1>
        <div className="image-container">
          <img alt="" src={shuffleImages[5]} />
        </div>
      </div>

    </Fade>
  )
}

export default Slideshow
