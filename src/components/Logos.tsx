import React from 'react';
import styled from 'styled-components';
import mastercard from '../assets/mastercard.svg';
import vertex from '../assets/vertex.svg';
import nike from '../assets/nike.svg';
import accessbank from '../assets/accessbank.svg';
import { Container } from 'react-bootstrap';
const Logos = () => {
  return (
    <Container>
      <LogosWrapper>
        <div className="cover">
          <p className="prod1 head">Our devs have worked with</p>
          <div className="customers">
            <p className="prod1">
              <img src={mastercard} alt="mastercard" />
            </p>
            <p className="prod1">
              <img src={vertex} alt="vertex" />
            </p>
            <p className="prod1">
              <img src={nike} alt="nike" />
            </p>
            <p className="prod1">
              <img src={accessbank} alt="accessbank" />
            </p>
          </div>
        </div>
      </LogosWrapper>
    </Container>
  );
};

const LogosWrapper = styled.div`
  padding: 2rem 0;

  .cover,
  .customers {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .prod1 {
    padding: 10px 25px;
    text-align: center;
  }
`;

export default Logos;
