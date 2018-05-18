import React, { Component } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';

import NextButton from './next-button';

const Container = styled.div`
`;

const Choose = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 10px;

  &::before {
    content: '';
    margin: 0 5px;
    border: 5px solid rgba(0,0,0,0.7);
    border-radius: 50%;
    margin: 25px 10px;
    font-size: 1px;
    position: relative;
    bottom: 6px;
    ${props => props.highlight ? `box-shadow: 0px 0px 11px 4px rgb(110, 123, 3);` : ``};
  }
`;

class ChooseNext extends Component {
  state = {
    nextId: '',
    showConfirm: true
  }

  handleClick = (nextId) => {
    this.setState({ nextId });
  }

  confirm = () => {
    this.props.confirm(this.state.nextId);
    this.setState({ showConfirm: false })
  }

  render() {
    const steps = this.props.steps;
    const { showConfirm, nextId } = this.state;
    return (
      <Container>
        {map(steps, step => (
          <Choose key={step.nextId} onClick={() => this.handleClick(step.nextId)} highlight={this.state.nextId === step.nextId}>{step.message}</Choose>
        ))}
        {showConfirm && <NextButton title="CONFIRM" onClick={this.confirm} disabled={!nextId}/>}
      </Container>
    )
  }
}

export default ChooseNext;
