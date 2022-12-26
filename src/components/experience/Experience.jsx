import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  const frontEnd = [{ id: 1, program: 'HTML', status: 'Intermediate' },
    { id: 2, program: 'CSS', status: 'Intermediate' },
    { id: 3, program: 'Bootstrap', status: 'Intermediate' },
    { id: 4, program: 'JavaScript', status: 'Intermediate' },
    { id: 5, program: 'React', status: 'Intermediate' },
  ];

  const backEnd = [{ id: 1, program: 'Postgresql', status: 'Intermediate' },
    { id: 2, program: 'MySQL', status: 'Basic' },
    { id: 3, program: 'Ruby on Rails', status: 'Intermediate' },
  ];

  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        {/* Front End Skills */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEnd.map((f) => (
              <article key={f.id} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{f.program}</h4>
                  <small>{f.status}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Back End Skills */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backEnd.map((b) => (
              <article key={b.id} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{b.program}</h4>
                  <small>{b.status}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
