/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EFOOSAGDEV</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolioi</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; EFOOSAGDEV Develpors. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer