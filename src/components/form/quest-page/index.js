import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { map } from 'lodash';

import { selectChapter } from '../../../actions';
import { getQuestInfo } from '../../../selectors';

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
    const questInfo = this.props.questInfo;
    return (
      <Container>
        <QuestDescription questInfo={questInfo} />
        <Header>Content</Header>
        {map(questInfo.chapters, chapter => (
          <ChapterDescription key={chapter.id} chapter={chapter} onClick={this.props.selectChapter} />
        ))}
      </Container>
    )
  }
}

export default connect(
  state => ({
    questInfo: getQuestInfo(state)
  }),
  { selectChapter }
)(QuestPage);
