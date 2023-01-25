import React from 'react';
import './portfolio.css';
import portf5 from '../../assets/portf5.png';
import portf2 from '../../assets/portf2.png';
import portf3 from '../../assets/portf3.png';
import portf4 from '../../assets/portf4.png';

const portfolio = [{
  id: 2, title: 'Space Travel', address: 'https://github.com/efoosag/space-travel-hub.git', img: portf2,
},
{
  id: 3, title: 'Movies App', address: 'https://github.com/efoosag/movies-app.git', img: portf3,
},
{
  id: 4, title: 'Calculator App', address: 'https://github.com/efoosag/maths-magician.git', img: portf4,
},
{
  id: 5, title: 'Car Rentals App', address: 'https://github.com/efoosag/car-rental-app.git', img: portf5,
},
];

const Portfolio = () => (
  <section id="portfolio">
    <h5>Recent Works</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      {
        portfolio.map((p) => (
          <article key={p.id} className="portfolio__item">
            <div className="portfolio__item-image"><img src={p.img} alt="portfolio" /></div>
            <h3>{p.title}</h3>
            <div className="portfolio__item-cta">
              <a href={p.address} className="btn" target="_blank" rel="noreferrer">Github</a>
              <a href={p.address} className="btn btn-primary">Live Demo</a>
            </div>
          </article>
        ))
      }
    </div>
  </section>
);

export default Portfolio;
