import React from 'react';
import styled from 'styled-components';

export const Container = styled.div``;

export const Row = styled.div`
  margin: 10px 30px;
  display: flex;
  margin-bottom: 30px;
  cursor: pointer;
  background-color: #f8f5de;
  background-image: linear-gradient(to right, rgba(255,210,0,0.4), rgba(200, 160, 0, 0.1) 11%, rgba(0,0,0,0) 35%, rgba(200, 160, 0, 0.1) 65%);
  box-shadow: inset 0 0 75px rgba(255,210,0,0.3), inset 0 0 20px rgba(255,210,0,0.4), inset 0 0 30px rgba(220,120,0,0.8);
`;

export const Preview = styled.div`
  ${props => `width: ${props.size}px`};
  padding: 30px;
`;

export const Image = styled.img`
  ${props => props.horizontalAlign ? `height: ${props.size}px` : `width: ${props.size}px`};

  border-style: solid;
  border-color: #b3743d;
  border-image: linear-gradient(30deg, #b3743d 0%, #d0a987 50%, #b3743d 100%);
  border-image-slice: 1;
  border-width: 6px;
`;

export const Content = styled.div`
  font-family: "AustralisProSwash-Italic";
  color: rgba(0,0,0,0.5);
  width: 100%;
  padding: 30px;
`;

export const Title = styled.div`
  font-size: ${props => props.fontSize ? props.fontSize : '20px;'}
  font-weight: 700;
  color: rgba(0,0,0,0.7);
`;

export const Description = styled.div`
  font-size: 17px;
  color: rgba(0,0,0,0.5);
`;

export const Text = styled.div`
  font-size: ${props => props.fontSize ? props.fontSize : '20px;'}
  color: rgba(0,0,0,0.5);
`;

export const Frame = styled.div`
  border-style: solid;
  border-color: #b3743d;
  border-image: linear-gradient(30deg, #b3743d 0%, #d0a987 50%, #b3743d 100%);
  border-image-slice: 1;
  border-width: 6px;
`;
