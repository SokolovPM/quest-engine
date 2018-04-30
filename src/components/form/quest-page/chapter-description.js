import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, Row, Preview, Image, Content, Title, Description, Frame} from '../components';

class ChapterDescription extends Component {
  render() {
    const chapter = this.props.chapter
    return (
      <Container>
        <Row onClick={() => this.props.onClick(chapter.id)}>
          <Preview size={250}>
            <Image src={chapter.chapterImage.src} horizontalAlign={chapter.chapterImage.horizontalAlign} size={150}/>
          </Preview>
          <Content>
            <Title>
              {chapter.name}
            </Title>
            <Description>
              {chapter.description}
            </Description>
          </Content>
        </Row>
      </Container>
    )
  }
}

export default ChapterDescription;
