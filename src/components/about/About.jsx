/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './about.css';
import { FiAward } from 'react-icons/fi';
import { AiFillFolderOpen } from 'react-icons/ai';
import aboutImg from '../../assets/aboutImg.png';

const About = () => (
  <section id="about">
    <h5>Know More</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={aboutImg} alt="About Me Image" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FiAward className="about__card-icon" />
            <h5>Experience</h5>
            <small>2+ years</small>
          </article>
          <article className="about__card">
            <AiFillFolderOpen className="about__card-icon" />
            <h5>Projects</h5>
            <small>30+ Completed Project</small>
          </article>
        </div>
        <p>
          Hello I’m a software developer!
          <br />
          {' '}
          I can help you build products, features or websites.
          <br />
          Look through some of my work and experience!
          <br />
          If you have a coding project, don’t hestiate to contact me.
        </p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
  </section>
);

export default About;
