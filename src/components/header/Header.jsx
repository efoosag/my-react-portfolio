import React from 'react';
import './header.css';
import CTA from './CTA';
import img111 from '../../assets/img111.jpg';
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
        <img src={img111} alt="img111" className="img111" />
      </div>
      <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
  </header>
);

export default Header;
