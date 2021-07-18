import React from 'react';
import one from '../assets/1.svg';
import two from '../assets/2.svg';
import three from '../assets/3.svg';
import howImage from '../assets/howImage.svg';
import backImage from '../assets/backImage.svg';
import { Container } from 'react-bootstrap';
import styled, { css } from 'styled-components';
const How = () => {
  return (
    <Container>
      <HowWrapper>
        <div>
          <h4 className="title">how it works </h4>
        </div>
        <div className="grid-container">
          <div className="processes" style={{ flexBasis: '50%' }}>
            <div className="process">
              <div className="image">
                <img src={one} alt="first" />
              </div>
              <div className="process-details">
                <p className="process-title">Application</p>
                <p className="process-content">
                  Set up your profile and specify the engineering stack you
                  need.
                </p>
              </div>
            </div>
            <div className="process middle1">
              <div className="image">
                <img src={two} alt="second" />
              </div>
              <div className="process-details">
                <p className="process-title">shortlisting</p>
                <p className="process-content">
                  We will review your needs and send you one or multiple of our
                  exceptional engineers.
                </p>
              </div>
            </div>
            <div className="process">
              <div className="image">
                <img src={three} alt="third" />
              </div>
              <div className="process-details">
                <p className="process-title">Placement</p>
                <p className="process-content">
                  Work with them for 3 months at no cost then decide whether you
                  want to keep them or not.
                </p>
              </div>
            </div>
          </div>
          <div className="process-image" style={{ flexBasis: '50%' }}>
            <img src={howImage} alt="" className="main-img" />
          </div>
          <div className="backdrop">
            <img src={backImage} alt="" />
          </div>
        </div>
      </HowWrapper>
    </Container>
  );
};

const flexContent = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HowWrapper = styled.div`
  padding: 2rem 8rem;
  padding-top: 3rem;
  position: relative;
  .grid-container,
  .processes {
    margin: 2rem 0;
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  .title {
    color: #2d2f48;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2.5rem;
    width: 20rem;
  }

  .processes {
    flex-direction: column;
  }

  .middle1 {
    margin: 5rem 0;
  }

  .process {
    ${flexContent}
    justify-content: flex-start;
    width: 100%;
  }
  .image {
    flex-basis: 5%;
  }

  .process-details {
    margin-left: 4rem;
    flex-basis: 95%;
  }
  .process-title {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .process-content {
    font-size: 1rem;
    width: 60%;
    margin: 0;
  }

  .process-image {
    margin: 0;
    min-width: 40%;
    height: 33rem;
    z-index: 99;
  }
  .process-image img {
    width: 100%;
    height: 100%;
  }

  .backdrop {
    z-index: 1;
    position: absolute;
    right: 5rem;
    top: 6rem;
  }
  .apply-now {
    background: linear-gradient(96.67deg, #34a853 0%, #b8d344 100%);
    color: #fff;
    border: none;
    padding: 0.6rem 2rem;
  }
  a {
    text-decoration: none;
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    padding: 2rem;

    .grid-container {
      flex-direction: column-reverse;
      align-items: center;
    }

    .title {
      position: static;
      width: 100%;
      margin: 1rem auto;
      font-size: 1.8rem;
      text-align: center;
    }
  }

  @media only screen and (max-width: 319px) {
    .process-details {
      margin-left: 1rem;
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    .backdrop {
      display: none;
    }
    .process-content {
      font-size: 1rem;
      width: 100%;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    padding: 0 2rem;
    padding-top: 4rem;

    .grid-container {
      flex-direction: column-reverse;
      align-items: center;
    }

    .process-content {
      width: 100%;
    }

    .backdrop {
      display: none;
    }

    .title {
      font-size: 3rem;
      width: 100%;
      margin: 1rem auto;
      text-align: center;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    padding: 0 2rem;
    padding-top: 4rem;

    .title {
      position: static;
      width: 100%;
    }

    .process-content {
      width: 80%;
    }

    .middle1 {
      margin: 2rem 0;
    }

    .backdrop {
      right: 0;
      top: 10rem;
    }
  }
`;

export default How;
