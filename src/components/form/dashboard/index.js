import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import { getListOfQuest } from '../../../actions';

import Layout from '../layout';

const Container = styled.div`

`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.props.getListOfQuest();
  }

  render () {
    console.log('render', this.props);
    return (
      <Layout>
        <Container>
          <p>Here will be list of quests</p>
        </Container>
      </Layout>
    )
  }
}

export default connect(
  state => ({
    listOfQuests: state.dashboard.listOfQuests
  }),
  { getListOfQuest }
)(Dashboard);
