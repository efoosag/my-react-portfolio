/* eslint-disable no-console */
import React, { useRef } from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessageLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a6a4qui', 'template_row109g', form.current, 'bpBiE0Ji_nRAInGBY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>efoosagsite@gmail.com</h5>
            <a href="mailto:efoosagsite@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessageLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>efoosagDev</h5>
            <a href="https://m.me/victor.osagie.180" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+2348038890984</h5>
            <a href="https://api.whatsapp.com/send?phone=2348038890984" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="8" placeholder="message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
