import React from 'react';
import SingleLeader from './SingleLeader';
import chika from '../assets/chika.svg';
import lauren from '../assets/lauren.svg';
import emily from '../assets/emily.svg';
import jody from '../assets/jody.svg';
import nkem from '../assets/nkem.svg';
import pajoe from '../assets/pajoe.svg';
import styled from 'styled-components';
const Leadership = () => {
  return (
    <LeaderWrapper>
      <h2 className="leader-title">Our Leadership</h2>

      <div className="leaderbox">
        <SingleLeader
          image={chika}
          leaderName={'CHIKA NWOBI'}
          leaderTitle={'Founder & CEO'}
          jobs={[
            'Board member: Unilever',
            'Co-founder: Cheki.com.ng',
            'Investor & Director: Jobberman, Whogohost',
            'Partner: Rise Capital',
          ]}
        />

        <SingleLeader
          image={lauren}
          leaderName={'LAUNRENS KRUEZE'}
          leaderTitle={'Board Member'}
          jobs={[
            'Founder AEBC Consulting',
            'Partner KPMG Netherlands',
            '22yrs experiennce in Financial Audit',
          ]}
        />
        <SingleLeader
          image={emily}
          leaderName={'EMILY LIGGETTE'}
          leaderTitle={'Board Member'}
          jobs={[
            'ex-McKinsey',
            'Stanford University MBA',
            'Former CEO of Apexion Software and Capstone Turbines (NASDAQ listed)',
          ]}
        />
        <SingleLeader
          image={jody}
          leaderName={'JODY IKE'}
          leaderTitle={'Board Member'}
          jobs={[
            'Africa Innovation Director',
            'Diageo PLC, Lonndon International MBA, Thunderbird School of Global Management, Arizona, USA',
            '26yrs experiennce in Brand and Innovation',
          ]}
        />
        <SingleLeader
          image={nkem}
          leaderName={'NKEM ALOZIE'}
          leaderTitle={'Program Director'}
          jobs={[
            '18yrs experience in IT consulting',
            'IT Project Implementations for Bank of America | Marriott | General Motors | Sprinnt/Nextel | Aflac Insurance',
          ]}
        />
        <SingleLeader
          image={pajoe}
          leaderName={'JOSEPH ABBAH'}
          leaderTitle={'Chief Technical Officer'}
          jobs={[
            '11yrs software engineering experience',
            'Solutions Architect, Pebec Report',
          ]}
        />
      </div>
    </LeaderWrapper>
  );
};
const LeaderWrapper = styled.div`
  padding: 4rem 0 4rem 0;
  background: #fff;

  p {
    margin: 0;
  }
  .leader-title {
    margin-bottom: 2rem;
    font-weight: 600;
    font-size: 2.5rem;
    text-align: center;
    text-transform: uppercase;
    color: #2d2f48;
  }

  .leaderbox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .lead {
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
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    padding: 2rem 1rem;

    .leader-title {
      font-size: 1.5rem;
    }

    .leaderbox {
      flex-direction: column;
    }

    .lead-image {
      margin: 0 auto;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    padding: 4rem 0rem;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    padding: 4rem 2rem;
  }
`;

export default Leadership;
