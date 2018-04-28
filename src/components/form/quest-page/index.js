import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { map } from 'lodash';

import QuestDescription from './quest-description';

import ChapterDescription from './chapter-description';

const Container = styled.div``;

const Header = styled.div`
  padding: 30px;
  font-size: 24px;
  font-weight: 700;
`;

class QuestPage extends Component {
  render() {
    console.log('render quest page', this.props)
    const questInfo = this.props.questInfo;
    return (
      <Container>
        <QuestDescription questInfo={questInfo} />
        <Header>Content</Header>
        {map(questInfo.chapters, chapter => (
          <ChapterDescription key={chapter.id} chapter={chapter} />
        ))}
      </Container>
    )
  }
}

export default connect(
  state => ({
    questInfo: state.dashboard.questInfo
  }),
  { }
)(QuestPage);
