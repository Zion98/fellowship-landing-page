import React from 'react';
import styled, { css } from 'styled-components';
import skill from '../assets/skills.svg';
import { Container } from 'react-bootstrap';
const Skills = () => {
  return (
    <SkillsWrapper>
      <Container>
        <div className="skills-section">
          <div className="skill-image">
            <img src={skill} alt="skill" />
          </div>

          <div className="skill-details">
            <h2 className="skill-title">SKILLED IN TECHNOLOGIES YOU NEED</h2>
            <p className="skill-cta">
              Access a pool of skilled engineers to match your product
              requirements
            </p>
            <div className="all-skills">
              <div className="skills">
                <ul>
                  <li>Back-end engineer</li>
                  <li>Front-end engineer</li>
                  <li>Full-Stack engineer</li>
                  <li>Mobile Engineer</li>
                  <li>QA Engineer</li>
                  <li>React Developer</li>
                  <li>Android Developer</li>
                  <li>DevOps Engineer</li>
                </ul>
              </div>

              <div className="skills move-right">
                <ul className="ml-6">
                  <li>IOS Developer</li>
                  <li>React Native Developer</li>
                  <li>Python Developer</li>
                  <li>Node.JS Developer</li>
                  <li>Javascript Developer</li>
                  <li>Java Developer</li>
                  <li>C# Developer</li>
                  <li>UI/UX Developer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SkillsWrapper>
  );
};

const flex = css`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

const SkillsWrapper = styled.div`
  background: #f9f9fb;
  .skills-section {
    padding: 4rem 8rem;
    background: #f9f9fb;
    ${flex}
  }

  .skill-title {
    font-weight: 600;
    font-size: 2.5rem;
    text-transform: uppercase;
    color: #2c3134;
  }

  .skill-details {
    flex-basis: 45%;
  }

  .skill-cta {
    font-weight: normal;
    font-size: 1rem;
    color: #636363;
    width: 80%;
    margin: 1.5rem 0;
  }

  .all-skills {
    ${flex}
    justify-content: space-between;
  }

  .move-right {
    margin-left: 2rem;
  }

  ul {
    padding-left: 0rem;
    list-style-image: none;
    list-style-type: none;
  }
  .skills ul li {
    font-weight: normal;
    font-size: 1rem;
    margin: 1rem 0;
    color: #636363;
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    .skills-section {
      padding: 2rem;
      flex-direction: column;
    }
    .skill-title {
      margin: 1rem 0;
      text-align: center;
      font-size: 1.5rem;
    }

    .skill-image {
      width: 100%;
      margin: 0 auto;
    }

    .skill-image img {
      width: 100%;
      height: 100%;
    }

    .skill-cta {
      width: 100%;
      text-align: center;
    }
    .all-skills {
      justify-content: space-between;
    }
    .move-right {
      margin-left: 0rem;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    .skills-section {
      padding: 2rem;
      flex-direction: column;
    }

    .skill-title {
      margin: 1rem 0;
      text-align: center;
    }

    .skill-cta {
      width: 100%;
      text-align: center;
    }

    .skill-image {
      width: 100%;
      margin: 0 auto;
    }

    .skill-image img {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    .skills-section {
      padding: 4rem 2rem;
    }

    .skill-details {
      flex-basis: 40%;
    }
  }
`;

export default Skills;
