import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { map, find } from 'lodash';

import { selectChapter } from '../../../actions';

import Step from './step';

class Chapter extends Component {
  state = {
    steps: [
      this.props.chapterData.steps[0]
    ]
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.chapterData !== this.props.chapterData) {
      const steps = [nextProps.chapterData.steps[0]];
      this.setState({ steps });
    }
  }

  nextStep = (stepId) => {
    const nextStep = find(this.props.chapterData.steps, step => step.id === stepId);
    const steps = this.state.steps;
    steps.push(nextStep);
    this.setState({ steps });
  }

  render() {
    const steps = this.state.steps;
    return (
      <div>
        {map(steps, (step, i) => (<Step key={i} step={step} nextStep={this.nextStep} nextChapter={this.props.selectChapter}/>))}
      </div>
    )
  }
}

export default connect(
  state => ({
    chapterData: state.dashboard.chapterData
  }),
  { selectChapter }
)(Chapter);
