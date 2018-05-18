import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${props => props.width ? `width: ${props.width}px` : `width: 200px`};
  margin: auto;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  background: #bfb614;
  font-size: 20px;
  padding: 10px 0;
  color: ${props => props.disabled ? `rgba(0,0,0,0.3)` : `rgba(0,0,0,0.7)`};
  font-weight: 700;
`;

const NextButton = ({ title = "NEXT STEP", onClick, width = 200, disabled = false}) => (
  <Container onClick={() => disabled ? '' : onClick()} width={width} disabled={disabled}>
    {title}
  </Container>
)

export default NextButton;
