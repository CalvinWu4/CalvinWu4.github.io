import React, { useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Experiences = () => {
  const { experiences } = useContext(PortfolioContext);

  return (
    <section id="experiences">
      <Container>
        <div className="experience-wrapper">
          <Title title="Experiences" />
          <VerticalTimeline lineColor="#000000">
            {experiences.map((experience) => {
              const { title, organization, location, url, description, img, date, color, id } = experience;
              return (
                <VerticalTimelineElement
                  key={id}
                  className="vertical-timeline-element"
                  // date={date}
                  iconStyle={{ background: color, color: '#fff' }}
                >
                  <div className="card">
                    <div className="img-hover-zoom-large">
                      <img src={img} className="image-large" alt={organization} />
                    </div>
                    <div className="organization-container">
                      <a className="nav-item" href={url} target="_blank" rel="noopener noreferrer">
                        {organization}
                      </a>
                    </div>
                    <br />
                    <h3 className="vertical-timeline-element-title">{title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{date}</h4>
                    <br />
                    <p>{description}</p>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </Container>
    </section>
  );
};

export default Experiences;