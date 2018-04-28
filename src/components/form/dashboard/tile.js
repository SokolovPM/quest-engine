import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin: 20px auto;
  min-height: 450px;
  cursor: pointer;
  font-family: Montserrat;
  border-radius: 10px;
  overflow: hidden;
`;

const Preview = styled.div`
  height: 300px;
  overflow: hidden;
`;

const Image = styled.img`
  ${props => props.horizontalAlign ? 'height: 300px' : 'width: 300px'}
`;

const Header = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;

const Content = styled.div`
  color: #000000;
  background: #e9f7e2;
  min-height: 150px;
  padding: 10px;
`;

const Description = styled.div`
`;

class Tile extends Component {
  render () {
    const quest = this.props.quest;
    return (
      <Container onClick={() => this.props.onClick(quest.id)}>
        <Preview>
          <Image src={quest.questImage.src} horizontalAlign={quest.questImage.horizontalAlign}/>
        </Preview>
        <Content>
          <Header>{quest.name}</Header>
          <Description>{quest.description}</Description>
        </Content>

      </Container>
    )
  }
}

export default Tile;
