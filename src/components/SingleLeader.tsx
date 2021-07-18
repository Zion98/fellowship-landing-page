import React from 'react';
import styled from 'styled-components';

interface Leader{
  image?:string;
   leaderName?:string;
    leaderTitle?:string;
     jobs?:string[]; 
}
const SingleLeader = ({ image, leaderName, leaderTitle, jobs }:Leader) => {
  return (
    <SingleWrapper>
      <div className="lead-image image1">
        <img src={image} alt="chika" />
      </div>

      <p className="name">{leaderName}</p>
      <p className="title">{leaderTitle}</p>

      {jobs?.map((job, index) => {
        return (
          <p key={index} className="jobs">
            {job}
          </p>
        );
      })}
    </SingleWrapper>
  );
};

const SingleWrapper = styled.div`
  flex-basis: 25%;
  margin: 1rem 0;
  margin-left: 2rem;
  padding: 2rem 3rem 2rem 3rem;
  background: linear-gradient(
    180deg,
    rgba(184, 211, 68, 0.13) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border: 1px solid #e4e4e4;
  width: 25%;
  min-height: 600px;
  text-align: center;

  .leader2 {
    margin-right: 2rem;
  }

  .lead-image {
    width: 40%;
    margin: 0 auto;
  }

  .lead-image img {
    width: 100%;
    height: 100%;
  }

  .name {
    margin: 2rem 0 0.5rem 0;
    font-weight: bold;
    font-size: 1.3rem;
    color: #171825;
  }

  .title {
    margin-bottom: 1.5rem;
    font-weight: 300;
    font-size: 1.2rem;
    color: #34a853;
    text-transform: uppercase;
  }

  .jobs {
    margin-bottom: 1rem;
    font-weight: 300;
    font-size: 1.1rem;
    color: #2c3134;
  }
  a {
    color: #171825;
    text-decoration: none;
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 90%;
    flex-basis: 80%;
    margin: 1rem auto;
    text-align: center;

    .lead-image {
      margin: 0 auto;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1366px) {
    padding: 2rem 1rem;
    flex-basis: 30%;
    .lead-image {
      width: 50%;
    }
  }
`;

export default SingleLeader;
