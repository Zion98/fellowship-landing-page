import React from 'react';
import styled from 'styled-components';

import { Container } from 'react-bootstrap';
const Hire = () => {
  return (
    <HireWrapper>
      <Container>
        <div id="forms" className="hire-details">
          <h2>HIRE VETTED, WORLD-CLASS SOFTWARE ENGINEERS AT DECAGON</h2>
          <p>Tell us about your talent needs</p>
        </div>
      </Container>
    </HireWrapper>
  );
};

const HireWrapper = styled.div`
  padding: 3rem 8rem;
  padding-bottom: 1rem;
  background: #2d2f48;

  .hire-details h2 {
    font-weight: 600;
    font-size: 2.5rem;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }

  .hire-details p {
    margin-top: 1rem;
    font-size: 1.5rem;
    text-align: center;
    color: #ffffff;
  }

  .hire-btn {
    display: block;
    padding: 1rem 5rem;
    border: none;
    background: linear-gradient(96.67deg, #34a853 0%, #b8d344 100%);
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0 auto;
    text-transform: uppercase;
    color: #ffffff;
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    padding: 4rem 1rem;
    .hire-details h2 {
      width: 100%;
      font-size: 1.5rem;
    }
    .hire-details p {
      font-size: 1rem;
    }
  }
`;
export default Hire;
