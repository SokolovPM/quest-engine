import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { map, find } from 'lodash';

import { Container, Row, Preview, Image, Title, Description, Frame} from '../components';
import { selectChapter } from '../../../actions';
import Step from './step';

const Roll = styled.div`
  width: 800px;
  padding: 30px;
  margin: 30px auto;
  background-color: #f8f5de;
  background-image: linear-gradient(to right, rgba(255,210,0,0.4), rgba(200, 160, 0, 0.1) 11%, rgba(0,0,0,0) 35%, rgba(200, 160, 0, 0.1) 65%);
  box-shadow: inset 0 0 75px rgba(255,210,0,0.3), inset 0 0 20px rgba(255,210,0,0.4), inset 0 0 30px rgba(220,120,0,0.8);
  color: rgba(0,0,0,0.5);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

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
    const chapterData = this.props.chapterData;
    return (
      <Container>
        <Roll>
          <Header>
            <Title fontSize="26px" style={{ marginBottom: '30px' }}>{chapterData.name}</Title>
            <Image style={{ marginBottom: '30px' }} src={chapterData.chapterImage.src} size={500}/>
          </Header>
          {map(steps, (step, i) => (<Step key={i} step={step} nextStep={this.nextStep} nextChapter={this.props.selectChapter}/>))}
        </Roll>
      </Container>
    )
  }
}

export default connect(
  state => ({
    chapterData: state.dashboard.chapterData
  }),
  { selectChapter }
)(Chapter);
