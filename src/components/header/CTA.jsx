import React from 'react';
import my_cv from '../../assets/my_cv.pdf';

const CTA = () => (
  <div className="cta">
    <a href={my_cv} download className="btn">DownLoad Resume</a>
    <a href="#contact" className="btn btn-primary">Let's Talk</a>
  </div>
);

export default CTA;
