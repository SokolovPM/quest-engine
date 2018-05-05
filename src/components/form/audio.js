import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const Container = styled.div`
  
`;

const audioId = 'background-musik';
const steps = 100;

class Audio extends Component {
  state = {
    play: false
  }
  reduceVolume = () => {
    const audio = document.getElementById(audioId);
    audio.volume = audio.volume - 0.1 < 0 ? 0 : audio.volume - 0.1;
  }

  increaseVolume = () => {
    const audio = document.getElementById(audioId);
    audio.volume = audio.volume + 0.1 > 1 ? 1 : audio.volume + 0.1;
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.music !== this.props.music) {
      const audio = document.getElementById(audioId);
      if (!audio) {
        return;
      }
      audio.volume = 0.0;
      this.setState({ play: true });
      this.changeSound(5000, 1);
    }
  }

  changeSound = (duration, endVolume) => {
    const audio = document.getElementById(audioId);
    const currentVolume = audio.volume;
    const volumeStep = (endVolume - currentVolume) / steps;
    const durationStep = duration / steps;
    this.func(endVolume, volumeStep, durationStep);
  }

  func = (endVolume, volumeStep, durationStep) => {
    const audio = document.getElementById(audioId);
    if (volumeStep > 0) {
      if (audio.volume + volumeStep >= endVolume) {
        audio.volume = endVolume;
        return;
      }
    } else {
      if (audio.volume + volumeStep <= endVolume) {
        audio.volume = endVolume;
        return;
      }
    }
    audio.volume = audio.volume + volumeStep
    setTimeout(() => {
      this.func(endVolume, volumeStep, durationStep)
    }, durationStep)
  }

  render () {
    const { music } = this.props;
    return (
      <Container>
        Audio  Player!!!
        <div onClick={this.reduceVolume}>-</div>
        <div onClick={this.increaseVolume}>+</div>
        <div onClick={() => this.changeSound(2000, 0)}>down</div>
        <div onClick={() => this.changeSound(2000, 1)}>up</div>
        <audio
          id={audioId}
          autoPlay={this.state.play}
          loop={true}
          src={music ? music.src : ''}
        />
      </Container>
    )
  }
}

export default connect(
  state => ({
    music: state.dashboard.chapterData ? state.dashboard.chapterData.music : null
  }),
  { }
)(Audio);
