import React from 'react';
import styled from 'styled-components';
import cta from '../assets/cta.svg';
import { NavHashLink } from 'react-router-hash-link';
const Build = () => {
  return (
    <BuildWrapper>
      <div className="cta">
        <p className="main-cta">
          Build faster with a committed and vetted remote software engineering
          team.
        </p>

        <p className="mini-cta">
          Recruiting, training, ongoing HR management, and work infrastructure
          to help you scale quickly and cost-effectively.
        </p>
        <div>
          <NavHashLink className="cta-btn" to="#forms">
            Apply Now
          </NavHashLink>
        </div>
      </div>

      <div className="cta-image">
        <img src={cta} alt="cta" />
      </div>
    </BuildWrapper>
  );
};

const BuildWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4rem;

  .main-cta {
    font-style: normal;
    font-weight: bold;
    font-family: 'Averta Bold';
    font-size: 3rem;
    text-transform: uppercase;
    color: #2d2f48;
  }
  .mini-cta {
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    color: #2d2f48;
    opacity: 0.7;
  }

  .cta-btn {
    display: inline-block;
    font-weight: bold;
    font-size: 1.3rem;
    padding: 0.8rem 6rem;
    background: linear-gradient(96.67deg, #34a853 0%, #b8d344 100%);
    color: #fff;
    border: none;
    text-decoration: none;
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column-reverse;
    padding-left: 0rem;

    .cta {
      padding: 0.5rem;
    }
    .main-cta {
      margin: 1.5rem 0;
      font-size: 1.5rem;
      text-align: center;
    }

    .mini-cta {
      font-size: 1rem;
      width: 80%;
      margin: 1rem auto;
      text-align: center;
    }

    .cta-btn {
      display: block;
      width: 60%;
      margin: 0 auto;
      text-align: center;
      font-size: 1rem;
      padding: 0.8rem 3rem;
    }

    .cta-image {
      margin-top: 3rem;
      margin: 0 auto;
    }

    .cta-image img {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1366px) {
    padding-left: 2.5rem;
    .main-cta {
      margin: 1.5rem 0;
      font-size: 2rem;
      max-width: 85%;
    }

    .mini-cta {
      font-size: 1rem;
      max-width: 80%;
      margin: 1rem 0;
    }

    .cta-btn {
      margin: 0 auto;
      font-size: 1rem;
      padding: 0.8rem 3rem;
    }

    .cta-image {
      margin-top: 3rem;
      margin: 0 auto;
    }

    .cta-image img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default Build;
