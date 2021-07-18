import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
const FAQs = () => {
  return (
    <Container>
      <FAQsWrapper>
        <h2 className="faq-title">FAQs</h2>

        <div className="faqs-details first-faq">
          <div className="faqs1">
            <h3>When can I apply?</h3>
            <p>Applications to join the program are open now.</p>
          </div>
          <div className="faqs1 ">
            <h3>What stacks are the devs skilled in?</h3>
            <p>
              DecaDevs have been trained across a wide array of stacks
              including; Java, C#, iOS, Android, Node, NodeJS, React, Python,
              and PHP WordPress.
            </p>
          </div>
        </div>

        <div className="faqs-details mt-4">
          <div className="faqs1">
            <h3>Do we incur any cost at all?</h3>
            <p>
              Decagon will bear all costs during the internship phase. The
              developer’s wages, work tools, and accommodation will be fully
              covered by Decagon so that the internship phase can remain
              risk-free for you. If you are eventually satisfied with our
              DecaDev’s performance during the internship, you can go on to hire
              them at $2,500. Subject to terms and conditions.
            </p>
          </div>
          <div className="faqs1">
            <h3>How is time-zone difference handled? </h3>
            <p>
              DecaDevs assigned to Berlin-based companies will work on CEST time
              zone (9am- 5pm CEST) unless you request otherwise.{' '}
            </p>
          </div>
        </div>
      </FAQsWrapper>
    </Container>
  );
};

const FAQsWrapper = styled.div`
  padding: 2rem 8rem;
  .faq-title {
    font-weight: 600;
    font-size: 2.5rem;
    text-align: center;
    color: #464761;
  }

  .faqs-details {
    display: flex;
    justify-content: space-between;
  }

  .first-faq {
    margin-top: 3rem;
  }
  .faqs1 {
    flex-basis: 45%;
  }
  .faqs1 h3 {
    color: #000000;
    font-weight: 600;
    text-transform: uppercase;
  }

  .faqs1 h3,
  p {
    font-size: 1.3rem;
  }
  .faqs1 p {
    color: #636363;
    width: 95%;
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    padding: 2rem;

    .faqs-details {
      flex-direction: column;
      text-align: center;
    }

    .faqs1 {
      text-align: center;
    }

    .faqs1 h3,
    p {
      font-size: 1.1rem;
    }

    .faqs1 p {
      width: 100%;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1366px) {
    padding: 4rem 2rem;
  }
`;
export default FAQs;
