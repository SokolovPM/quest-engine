import React, { Component } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import { connect } from 'react-redux';

import { getListOfQuest, getQuestInfo } from '../../../actions';

import Layout from '../layout';

import Tile from './tile';

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
`;

const RowItem = styled.div`
  width: 300px;
  flex-grow: 1;
`;


const tilesInRow = 3;

const chunk = (arr) => {
  const chunks = [];
  let i = 0;
  const n = arr.length;
  if (n === 0) {
    return chunks;
  }
  while (i < n) {
    chunks.push(arr.slice(i, i += tilesInRow));
  }
  return chunks;
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.props.getListOfQuest();
  }

  render () {
    const listOfQuests = this.props.listOfQuests;
    const chunks = chunk(listOfQuests);
    return (
      <Container>
        {map(chunks, (chunk, i) => (
          <Row key={i}>
            {map(chunk, quest => (
              <RowItem key={quest.name}>
                <Tile quest={quest} onClick={this.props.getQuestInfo} />
              </RowItem>
            ))}
          </Row>
        ))}
      </Container>
    )
  }
}

export default connect(
  state => ({
    listOfQuests: state.dashboard.listOfQuests
  }),
  { getListOfQuest, getQuestInfo }
)(Dashboard);
