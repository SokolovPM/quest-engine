import React, { Component } from 'react';
import styled from 'styled-components';
import { map, find } from 'lodash';

const Container = styled.div`
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

const languages = [
  {
    name: 'ENGLISH',
    code: 'EN'
  },
  {
    name: 'RUSSIAN',
    code: 'RU'
  },
  {
    name: 'DEUTSCH',
    code: 'DE'
  },
]

class Language extends Component {
  state = {
    language: 'ENGLISH'
  }

  handleClick = (code) => {
    const language = find(languages, language => language.code === code);
    this.setState({ language: language.name });
  }

  render () {
    return (
      <Container>
        <Title>{this.state.language}</Title>
        <List>
          {map(languages, language => (
            <li key={language.code} onClick={() => this.handleClick(language.code)}>{language.name}</li>
          ))}
        </List>
      </Container>
    )
  }
}

export default Language;
