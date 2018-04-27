import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 20px;
`;

class Layout extends Component {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    )
  }
}

export default Layout;
