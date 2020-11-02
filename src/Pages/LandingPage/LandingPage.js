import React from 'react';
import './LandingPage.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image01 from '../../Assets/team01.jpg';
import image02 from '../../Assets/team02.jpg';
import image03 from '../../Assets/team03.jpg';
import image04 from '../../Assets/team04.jpg';

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to OurSpace!</h1>
      <div className="signup-login">
        <p className="signup">
          Please <a href="/signup">Sign Up</a> to find friends and colleagues
        </p>
        <p className="login">
          Already have an account? Please <a href="/login">Login</a>
        </p>
      </div>
      <div className="carousel">
        <AliceCarousel autoPlay autoPlayInterval="2000">
          <img src={image01} className="sliderimg" alt="" />
          <img src={image02} className="sliderimg" alt="" />
          <img src={image03} className="sliderimg" alt="" />
          <img src={image04} className="sliderimg" alt="" />
        </AliceCarousel>
      </div>
    </div>
  );
}
