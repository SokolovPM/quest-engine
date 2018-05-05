import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const Container = styled.div`

`;


class Sound extends Component {
  render () {
    console.log('sound render', this.props)
    const { sound } = this.props;
    return (
      <Container>
        <audio
          autoPlay={true}
          loop={false}
          src={sound.src}
        />
      </Container>
    )
  }
}

export default Sound;
