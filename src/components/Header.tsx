import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import decagon from '../assets/decagon.svg';
import { NavHashLink } from 'react-router-hash-link';
import { Container } from 'react-bootstrap';
const Header = () => {
  const [shadow, setShadow] = useState<boolean>(false);

  console.log(shadow);
  const addShadow = (props: any) => {
    if (window.scrollY >= 100) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };
  window.addEventListener('scroll', addShadow);
  return (
    <HeaderWrapper>
      <Container>
        <nav className="navbar navbar-light bg-light">
          <Link to="/" className="navbar-brand decagon-logo">
            <img src={decagon} alt="decagonlogo" />
          </Link>
          <form className="form-inline">
            <NavHashLink
              id="trans"
              to="#forms"
              className={'signup my-2 my-sm-0 apply'}
            >
              Apply Now
            </NavHashLink>
          </form>
        </nav>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: sticky;
  z-index: 9000;
  top: 0;
  width: 100% !important;
  padding: 1.5rem 0;
  background-color: #fff;
  box-shadow: ${(props: any) =>
    props.shadow === true ? '1px 1px 10px 0px' : 0};
  nav {
    background: #fff !important;
    width: 100% !important;
  }

  p {
    margin: 0;
  }
  a {
    font-size: 1rem;
    color: #fff !important;
    text-decoration: none;
  }
  .active {
    color: #34a853;
  }

  .decagon-logo {
    width: 10rem;
  }

  .decagon-logo img {
    width: 100%;
    height: 100%;
  }

  .apply {
    background: #000000 !important;
    text-transform: uppercase;
    color: #ffffff;
    border: 1px solid #34a853;
    padding: 0.5rem 2rem;
    transition: all ease 0.2s;
  }

  #trans:hover {
    color: #fff !important;
  }
  .extra {
    background: linear-gradient(96.67deg, #34a853 0%, #b8d344 100%);
  }

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    .decagon-logo {
      width: 5rem;
    }

    a {
      font-size: 1.1rem !important;
    }

    .decagon-logo {
      min-width: 40% !important;
    }

    .apply {
      padding: 0.5rem 1rem;
    }
  }
`;

export default Header;
