import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Audio from '../audio';
import Language from './language'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  & div {
    margin: 0 20px;
  }
`;

const Home = styled.div`
  margin: 0 20px;
  width: 100%;

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
        {this.props.questName && <Audio />}
        {this.props.questName && <Language />}
      </Container>
    )
  }
}

export default connect(
  state => ({
    questName: state.dashboard.questName
  })
)(Header);
