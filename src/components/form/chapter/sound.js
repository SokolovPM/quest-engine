import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const rangeVolumeId="sound-volume"

const Container = styled.div`
`;

let id = '';

class Sound extends Component {
  state = {
    play: false
  }

  componentDidMount = () => {
    const rangeVolume = document.getElementById(rangeVolumeId);
    const soundElement = document.getElementById(id);
    soundElement.volume = rangeVolume.value/100;
    this.setState({ play: true });
  }

  render () {
    const { sound } = this.props;
    id = new Date().getTime();
    return (
      <Container>
        <audio
          autoPlay={this.state.play}
          loop={false}
          src={sound.src}
          id={id}
        />
      </Container>
    )
  }
}

export default Sound;
