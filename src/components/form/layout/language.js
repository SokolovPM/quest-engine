import React, { Component } from 'react';
import styled from 'styled-components';
import { map, find } from 'lodash';
import { connect } from 'react-redux';

import { selectLanguage } from '../../../actions';

const Container = styled.div`
  width: 150px;
  &:hover > ul {
    display: inherit;
  }
`;

const List = styled.ul`
  display: none;
  position: absolute;
  list-style: none;
  padding: 0;
  background: #bf8d8d;

  & li {
    width:100px;
    float:none;
    display:list-item;
    position: relative;
    cursor: pointer;
    font-size: 18px;
    padding: 5px 10px;

    &:hover {
      background: #000000;
    }
  }
`;

const Title = styled.span`
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

class Language extends Component {
  handleClick = (code) => {
    this.props.selectLanguage(code);
  }

  render () {
    const { languageList, language } = this.props;
    if (languageList.length === 0) {
      return <div />
    }
    return (
      <Container>
        <Title>{language.name}</Title>
        <List>
          {map(languageList, lang => (
            <li key={lang.code} onClick={() => this.handleClick(lang.code)}>{lang.name}</li>
          ))}
        </List>
      </Container>
    )
  }
}

export default connect(
  state => ({
    languageList: state.dashboard.languageList,
    language: state.dashboard.language
  }),
  { selectLanguage }
)(Language);
