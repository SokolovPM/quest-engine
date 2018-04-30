import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, Row, Preview, Image, Content, Title, Description, Frame} from '../components';

class QuestDescription extends Component {
  render() {
    const questInfo = this.props.questInfo;
    return (
      <Container>
        <Row>
          <Preview size={400}>
            <Image src={questInfo.questImage.src} horizontalAlign={questInfo.questImage.horizontalAlign} size={300} />
          </Preview>
          <Content>
            <Title>{questInfo.name}</Title>
            <Description>{questInfo.description}</Description>
          </Content>
        </Row>
      </Container>
    )
  }
}

export default QuestDescription;
