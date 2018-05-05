import React, { Component } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';

import { Container, Text, Image, Preview } from '../components';

import Sound from './sound';

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

  renderText = () => {
    return (<Text style={{ marginBottom: '20px' }} >{this.props.step.text}</Text>)
  }

  render() {
    const step = this.props.step;
    return (
      <Container>
        <Row>
          {step.stepImage &&
            <Preview style={{ paddingTop: '0' }}>
              <Image style={{ marginBottom: '30px' }} src={step.stepImage.src} size={300}/>
            </Preview>
          }
          {step.text && this.renderText()}
        </Row>
        {this.renderNext()}
        {step.soundEffect && <Sound sound={step.soundEffect} />}
      </Container>
    )
  }
}

export default Step;
