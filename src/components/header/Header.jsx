import React from 'react';
import './header.css';
import CTA from './CTA';
import img11 from '../../assets/img11.png';
import HeaderSocials from './HeaderSocials';

const Header = () => (
  <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Victor Osagie</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocials />
      <div>
        <img src={img11} alt="img11" className="img11" />
      </div>
      <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
  </header>
);

export default Header;
