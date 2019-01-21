import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';

const buttonColor = chroma('#22c2ca');

export default styled.button`
  background: ${buttonColor.css()};
  border-radius: 8px;
  border: none;
  padding: 12px 24px;
  display: block;
  width: 100%;
  font-size: 16px;
  color: #FFF;
  outline: none;
  font-weight: 500;
  font-family: 'Rubik';
  cursor: pointer;
  transition: background linear .3s;

  i {
    margin-right: 6px;
  }

  &:hover {
    background: ${buttonColor.darken(.3).css()}
  }
`;
