import React, { Component } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';

import { Container, Text, Image, Preview } from '../components';

export const Row = styled.div`
  display: flex;
`;

class Step extends Component {

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.step === nextProps.step) {
      return false;
    }
    return true;
  }

  renderNext = () => {
    const step = this.props.step;
    if (step.nextId) {
      return (<span onClick={() => this.props.nextStep(step.nextId)}>NEXT STEP</span>)
    }
    if (step.nextSteps) {
      return (
        <div>
          {
            map(step.nextSteps, next => (<span key={next.nextId} onClick={() => this.props.nextStep(next.nextId)}>{next.message}</span>))
          }
        </div>
      );
    }
    if (step.nextChapter) {
      return (<span onClick={() => this.props.nextChapter(step.nextChapter)}>TO THE NEXT CHAPTER!</span>);
    }
  }

  render() {
    const step = this.props.step;
    if (step.stepImage) {
      return (<Container>
        <Row>
          <Preview style={{ paddingTop: '0' }}>
            <Image style={{ marginBottom: '30px' }} src={step.stepImage.src} size={300}/>
          </Preview>
          <Text style={{ marginBottom: '20px' }} >{step.text}</Text>
        </Row>
        {this.renderNext()}
      </Container>);
    }
    return (
      <Container>
        <Text style={{ marginBottom: '20px' }} >{step.text}</Text>
        {this.renderNext()}
      </Container>
    )
  }
}

export default Step;
