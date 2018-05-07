import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { changeSound, changeTrack } from './audio-utils.js';

const Container = styled.div`
`;

const audioId = 'background-musik';

class Audio extends Component {
  state = {
    play: false,
    src: null
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
      changeTrack(this.props.music, nextProps.music);
    }
  }

  render () {
    const { music } = this.props;
    return (
      <Container>
        Audio  Player!!!
        <div onClick={this.reduceVolume}>-</div>
        <div onClick={this.increaseVolume}>+</div>
        <audio
          id={audioId}
          loop={true}
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
