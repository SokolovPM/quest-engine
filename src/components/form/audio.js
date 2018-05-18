import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { forEach } from 'lodash';

import { changeSound, changeTrack } from './audio-utils.js';

const Container = styled.div`
`;

const audioId = 'background-musik';

class Audio extends Component {
  state = {
    play: false,
    src: null,
    value: 100
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

  volumeChange = (e) => {
    this.setState({ value: e.target.value });
    const audios = document.getElementsByTagName('audio');
    forEach(audios, audio => audio.volume = e.target.value / 100);
  }

  render () {
    const { music } = this.props;
    return (
      <Container>
        <input id="sound-volume" type="range" onChange={this.volumeChange} min="0" max="100" value={this.state.value} />
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
