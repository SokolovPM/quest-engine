import React, { Component } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';

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
    return (
      <div>
        <p>{step.id}</p>
        <p>{step.text}</p>
        {this.renderNext()}
      </div>
    )
  }
}

export default Step;
