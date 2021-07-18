import React from 'react';
import styled from 'styled-components';
import quality from '../assets/quality.svg';
import { Container } from 'react-bootstrap';
const Qualities = () => {
  return (
    <QualitiesWrapper>
      <Container>
        <h2 className="title-quality">decadevs are exceptional</h2>

        <div className="quality-section">
          <div className="quality-title">
            <div className="quality-image">
              <img src={quality} alt="tutors" />
            </div>
          </div>
          <div className="quality-details">
            <div className="quality">
              <h3>experience</h3>
              <p>
                Our DecaDevs have worked on live projects during their bootcamp.
                They have also gone on to work with companies like Indeed, Nike,
                and MasterCard.
              </p>
            </div>
            <div className="quality">
              <h3>technical</h3>
              <p>
                Our DecaDevs have been trained across a wide array of stacks
                including; Java, C#, iOS, Android, Node, NodeJS, React, Python,
                and PHP WordPress.
              </p>
            </div>
            <div className="quality">
              <h3>communication</h3>
              <p>
                The developers have excellent communication, self-leadership,
                and interpersonal skills.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </QualitiesWrapper>
  );
};

const QualitiesWrapper = styled.div`
  background: #2d2f48;

  .title-quality {
    text-align: center;
    font-size: 2.5rem;
    text-transform: uppercase;
    color: #ffffff;
  }

  .quality-section {
    padding: 2rem 8rem;
    padding-top: 5rem;
    background: #2d2f48;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding-bottom: 3rem;
  }

  .quality-image {
    min-width: 60%;
  }

  .quality-image img {
    width: 100%;
    height: 100%;
  }

  .quality-details {
    flex-basis: 50%;
  }

  .quality {
    margin-left: 5rem;
    margin-top: 1rem;
  }

  .quality h3 {
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #ffffff;
  }

  .quality p {
    margin: 0;
    width: 90%;
    font-size: 1.2rem;
    color: #ffffff;
    opacity: 0.8;
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    .title-quality {
      text-align: center;
      font-size: 1.5rem;
    }

    .quality-section {
      padding: 2rem;
      flex-direction: column;
    }

    .quality-details {
      flex-basis: 100%;
      text-align: center;
    }

    .quality {
      margin-left: 0rem;
      margin: 2rem 0;
    }

    .quality p {
      width: 100%;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    .quality-section {
      padding: 2rem;
      flex-direction: column;
    }

    .quality-details {
      flex-basis: 100%;
      text-align: center;
    }

    .quality {
      margin-left: 0rem;
    }

    .quality p {
      width: 100%;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    .quality-section {
      padding: 4rem 2rem;
    }
  }
`;

export default Qualities;
