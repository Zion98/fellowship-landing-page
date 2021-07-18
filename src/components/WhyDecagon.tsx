import React from 'react';
import styled from 'styled-components';
import why1 from '../assets/why1.svg';
import why2 from '../assets/why2.svg';
import { Container } from 'react-bootstrap';
const WhyDecagon = () => {
  return (
    <Container>
      <WhyDecagonWrapper>
        <h2 className="why-title">Why Decagon?</h2>

        <div className="why-flex">
          <div className="why-cta">
            <p>
              Since 2018, Decagon has recruited and trained the top 0.5% of
              exceptional developer talent in the African tech ecosystem.
            </p>
            <p>
              <a className="cta-link" href="https://decagon.institute/">
                learn more about our program →
              </a>
            </p>
          </div>
          <div className="why-right">
            <div className="right1">
              <div className="right1-img">
                <img src={why1} alt="why1" />
              </div>
              <div className="right1-details">
                <p>Training</p>
                <p>
                  Our pool of developers are products of a rigorous 6-month
                  software training bootcamp.
                </p>
              </div>
            </div>
            <div className="right1">
              <div className="right1-img">
                <img src={why2} alt="why2" />
              </div>
              <div className="right1-details">
                <p>placement</p>
                <p>
                  We have placed the devs with companies across 3 continents:
                  Africa, America & Europe.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </WhyDecagonWrapper>
    </Container>
  );
};

const WhyDecagonWrapper = styled.div`
  padding: 2rem 8rem;
  background: #fff;

  .why-title {
    font-weight: 600;
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .why-flex,
  .right1 {
    display: flex;
    justify-content: space-between;
  }
  .why-flex {
    margin-bottom: 2rem;
  }

  .why-cta p:first-child {
    font-weight: normal;
    font-size: 1.3rem;
    color: #000000;
    opacity: 0.8;
  }

  .why-cta p:last-child {
    font-weight: bold;
    font-size: 1.1rem;
    text-transform: uppercase;
    color: #34a853;
  }

  .cta-link {
    color: #34a853;
    text-decoration: none;
  }

  .right1-details p:first-child {
    margin: 0;
    font-weight: 600;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  .right1-details p:last-child {
    font-weight: normal;
    font-size: 1.3rem;
    opacity: 0.8;
  }

  .right1-img {
    flex-basis: 35%;
  }

  .right1-img img {
    width: 100%;
    height: 100%;
  }

  .right1-details {
    margin-left: 2rem;
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    padding: 2rem;

    .why-title {
      font-size: 1.5rem;
      text-align: center;
      margin-top: 0;
    }

    .why-flex,
    .right1 {
      flex-direction: column;
    }

    .why-cta p:first-child {
      font-size: 1.1rem;
      text-align: center;
    }

    .why-cta p:last-child {
      font-size: 1rem;
      text-align: center;
    }

    .why-cta p:last-child a {
      color: #34a853;
      text-decoration: none;
    }

    .right1-details {
      margin: 1rem 0;
      text-align: center;
    }

    .right1-details p:first-child {
      font-size: 1.2rem;
      text-align: center;
    }
    .right1-details p:last-child {
      font-size: 1.1rem;
      text-align: center;
    }

    .right1-img {
      margin: 0 auto;
      max-width: 80%;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    padding: 4rem 2rem;
    .why-flex,
    .right1 {
      flex-direction: column;
    }

    .why-title {
      text-align: center;
      margin-top: 0;
    }

    .right1-img {
      margin: 0 auto;
      width: 40%;
    }

    .right1-img img {
      width: 100%;
      height: 100%;
    }

    .right1-details {
      text-align: center;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    padding: 4rem 2rem;

    .right1-img {
      flex-basis: 50%;
    }
  }
`;

export default WhyDecagon;
