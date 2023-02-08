import React from 'react';
import './portfolio.css';
import portf5 from '../../assets/portf5.png';
import portf2 from '../../assets/portf2.png';
import portf3 from '../../assets/portf3.png';
import portf4 from '../../assets/portf4.jpeg';

const portfolio = [{
  id: 2, title: 'Space Travel', desc: 'This website was developed to simplify reservation activities of a space travel hub. This project was carried out using CSS, React and Redux.', address: 'https://github.com/efoosag/space-travel-hub.git', live: 'https://efoosag.github.io/space-travel-hub/', img: portf2,
},
{
  id: 3, title: 'Budget App', desc: 'An Application for providing budget details. This Application was carried out using Ruby on Rails, Postgresql and Bootstrap.', address: 'https://github.com/efoosag/Budget-App.git', live: 'https://www.loom.com/share/6f5a878ea4d64a178c62a7e1a36f06b7', img: portf3,
},
{
  id: 4, title: 'Calculator App', desc: 'This Application was developed for executing simple mathematical calculations. This project was carried out using CSS, HTML, and JavaScript.', address: 'https://github.com/efoosag/maths-magician.git', live: 'https://62cff7c49951cf4d49283fbd--imaginative-cobbler-e1d3a8.netlify.app/', img: portf4,
},
{
  id: 5, title: 'To Do List', desc: 'The project is a To-Do list project to help plan daily, weekly or monthly activity. I used Html, CSS and JavaScript Technology to execute the project.', address: 'https://github.com/efoosag/To-Do-List.git', live: 'https://moraad97.github.io/To-Do-List', img: portf5,
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
            <p>{p.desc}</p>
            <div className="portfolio__item-cta">
              <a href={p.address} className="btn" target="_blank" rel="noreferrer">Github</a>
              <a href={p.live} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </article>
        ))
      }
    </div>
  </section>
);

export default Portfolio;
