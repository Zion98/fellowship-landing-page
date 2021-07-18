import React from 'react';
import styled from 'styled-components';
import ezinne from '../assets/ezinne.svg';
import shola from '../assets/shola.svg';
import david from '../assets/david.svg';
import visa from '../assets/visa1.svg';
import procore from '../assets/procore.svg';
import vertex from '../assets/vertex1.svg';
import { Container } from 'react-bootstrap';
const Mentors = () => {
  return (
    <MentorWrapper>
      <Container>
        <h1 className="mentor-title">MENTORED BY TOP GLOBAL TECH LEADERS</h1>

        <div className="mentor-group">
          <div className="mentor">
            <div className="mentor-img">
              <img src={ezinne} alt="ezinne" />
            </div>
            <div className="company-img">
              <img src={procore} alt="procore" />
            </div>
            <div className="mentor-details">
              <p> ezinne udeze</p>
              <p>Vice President, Procore</p>
            </div>
          </div>
          <div className="mentor">
            <div className="mentor-img">
              <img src={shola} alt="shola" />
            </div>
            <div className="company-img2">
              <img src={visa} alt="visa" />
            </div>
            <div className="mentor-details">
              <p> shola aluko</p>
              <p>
                {' '}
                Senior Director, <br />
                Visa Platform Strategy and Innovation{' '}
              </p>
            </div>
          </div>
          <div className="mentor">
            <div className="mentor-img">
              <img src={david} alt="david" />
            </div>
            <div className="company-img3">
              <img src={vertex} alt="vertexlogo" />
            </div>
            <div className="mentor-details">
              <p> David Macdonald</p>
              <p>CEO, Vertex Software</p>
            </div>
          </div>
        </div>
      </Container>
    </MentorWrapper>
  );
};

const MentorWrapper = styled.div`
  padding: 2rem 15rem;
  background: #f9f9fb;
  .mentor-title {
    width: 60%;
    margin: 0rem auto;
    font-weight: 600;
    font-size: 2.8rem;
    text-align: center;
    text-transform: uppercase;
    color: #2d2f48;
  }

  .mentor-group,
  .mentor {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .mentor-group {
    margin-top: 2rem;
  }

  .mentor {
    flex-direction: column;
    position: relative;
  }

  .mentor-details {
    margin: 2rem 0;
    text-align: center;
    color: #000000;
    p {
      margin: 0;
    }
  }

  .mentor-details p:first-child {
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  .mentor-details p:last-child {
    font-weight: normal;
    font-size: 1.2rem;
    opacity: 0.7;
  }

  .company-img {
    position: absolute;
    bottom: 7rem;
    right: 1rem;
  }

  .company-img2 {
    position: absolute;
    bottom: 8rem;
    right: 5rem;
    width: 60px;
    height: 60px;
    background: #0353a5;
    border-radius: 100%;
  }

  .company-img2 img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .company-img3 {
    position: absolute;
    bottom: 7rem;
    right: 1rem;
    width: 60px;
    height: 60px;
    background: linear-gradient(180deg, #6455fb 0%, #3eb8fb 100%);
    border-radius: 100%;
  }
  .company-img3 img {
    padding: 0.8rem;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    padding: 2rem;
    .mentor-title {
      width: 80%;
      font-size: 1.5rem;
    }

    .mentor-group {
      flex-direction: column;
    }

    .company-img2 {
      position: absolute;
      bottom: 10rem;
      right: 2rem;
    }
  }

  @media only screen and (min-width: 400px) and (max-width: 450px) {
    .company-img2 {
      right: 4rem;
    }  
}

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    padding: 2rem;

    .company-img2 {
      bottom: 8rem;
      right: 5rem;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    padding: 4rem;
  }
`;

export default Mentors;
