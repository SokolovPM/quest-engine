import React, { Component } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';

import { Text, Image, Preview } from '../components';
import Sound from './sound';
import NextButton from '../../buttons/next-button';
import ChooseNext from '../../buttons/choose-next';

const Container = styled.div`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
`;

class Step extends Component {
  state = {
    end: false,
    renderNextButton: true
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.step === nextProps.step && this.state === nextState) {
      return false;
    }
    if (this.props.step !== nextProps.step) {
      this.setState({ renderNextButton: true });
    }
    return true;
  }

  handleNextChapter = () => {
    const step = this.props.step;
    this.setState({ end: true });
    this.props.nextChapter(step.nextChapter)
  }

  handleNextStep = () => {
    const step = this.props.step;
    this.props.nextStep(step.nextId);
    this.setState({ renderNextButton: false });
  }

  renderNext = () => {
    const step = this.props.step;
    if (step.nextId) {
      return (
        <div>
          <NextButton
            onClick={this.handleNextStep}
            title="NEXT STEP"
          />
        </div>
      )
    }
    if (step.nextSteps) {
      return (
        <ChooseNext steps={step.nextSteps} confirm={this.props.nextStep} />
      )
    }

    if (step.nextChapter) {
      return (
        <div>
          <NextButton
            onClick={this.handleNextChapter}
            title={this.state.end ? 'LOADING NEXT CHAPTER...' : 'TO THE NEXT CHAPTER!'}
            disabled={this.state.end}
            width={300}
          />
        </div>
      )
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
        {this.state.renderNextButton && this.renderNext()}
        {step.soundEffect && <Sound sound={step.soundEffect} />}
      </Container>
    )
  }
}

export default Step;
