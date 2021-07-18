import React from 'react';
import styled from 'styled-components';
import tutor from '../assets/tutorwhen.svg';
import { Container } from 'react-bootstrap';

const When = () => {
  return (
    <WhenWrapper>
      <Container>
        <div className="when-section">
          <h2 className="when-title">
            WHEN YOU HIRE ENGINEERS THROUGH DECAGON’S FELLOWSHIP PROGRAMME, YOU
            ENJOY{' '}
          </h2>

          <div className="when-details">
            <div className="when-content">
              <div className="when1">
                <h3>2-year Talent Commitment</h3>{' '}
                <p>
                  We provide companies with a pool of well-trained and competent
                  software engineers that are committed to the company for 2
                  years.
                </p>
              </div>
              <div className="when1">
                <h3>Accelerated Hiring Process</h3>{' '}
                <p>
                  Save cost and time, conducting multiple tests and interviewing
                  engineers. We’ll match you with vetted engineers instantly and
                  facilitate exclusive talent management support from start to
                  finish.{' '}
                </p>
              </div>
              <div className="when1">
                <h3>Quality Engineering Talent</h3>{' '}
                <p>
                  We recruit the top 0.5% talent, they undergo assessments,
                  intensive training, and upskilled in best practices.
                </p>
              </div>
              <div className="when1 when-bottom">
                <h3>Avoiding Unplanned Talent Exits</h3>{' '}
                <p>
                  Many engineers switch jobs, leading to a loss of time on
                  projects. Decadevs bring stability to your team.
                </p>
              </div>
            </div>

            <div className="when-image">
              <img src={tutor} alt="tutors" />
            </div>
          </div>
        </div>
      </Container>
    </WhenWrapper>
  );
};

const WhenWrapper = styled.div`
  background: #2d2f48;
  .when-section {
    padding: 1rem 8rem;
  }
  .when-title {
    padding-top: 2rem;
    font-weight: 600;
    font-size: 2.5rem;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }

  .when-details {
    margin: 3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .when1 {
    margin: 2rem 0;
  }

  .when1 h3 {
    font-weight: 600;
    font-size: 1.3rem;
    text-transform: uppercase;
    color: #ffffff;
  }

  .when1 p {
    font-weight: normal;
    font-size: 1.3rem;
    color: #ffffff;
    opacity: 0.8;
  }

  .when-image {
    margin-left: 2rem;
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    .when-section {
      padding: 2rem;
      padding-bottom: 1rem;
    }

    .when-title {
      font-weight: 600;
      font-size: 1.5rem;
      width: 90%;
    }

    .when1 h3 {
      font-size: 1rem;
    }

    .when1 p {
      font-weight: normal;
      font-size: 1rem;
    }

    .when-details {
      flex-direction: column-reverse;
    }

    .when-image {
      max-width: 90%;
      margin: 0 auto;
    }

    .when-image img {
      width: 100%;
      height: 100%;
    }

    .when-bottom {
      margin-bottom: 0;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    .when-section {
      padding: 1rem 2rem;
      text-align: center;
    }

    .when-details {
      flex-direction: column-reverse;
    }

    .when-image {
      max-width: 90%;
      margin: 0 auto;
    }

    .when-image img {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    .when-section {
      padding: 1rem 2rem;
    }
    .when1 {
      margin-top: 0;
    }
  }
`;

export default When;
