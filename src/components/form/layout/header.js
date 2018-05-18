import React, { Component } from 'react';
import styled from 'styled-components';

import Audio from '../audio';

const Container = styled.div`
  display: flex;
`;

const Home = styled.div`
  margin: 0 20px;

  & a {
    text-decoration: none;
    color: white;
    font-size: 20px;
  }
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <Home>
          <a href="/">HOME</a>
        </Home>
        <Audio />
      </Container>
    )
  }
}

export default Header;
