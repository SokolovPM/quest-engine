import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

class Layout extends Component {
  render() {
    return (
      <Container>
        <p>Here will be the layout component </p>
        {this.props.children}
      </Container>
    )
  }
}

export default Layout;
