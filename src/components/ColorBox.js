import React from 'react';
import Input, {WordInput} from '../styles/Input';
import styled from 'styled-components';
import {generateColorPalette} from '../color-helpers';
import {valid} from 'chroma-js';

const ColorBoxContainer = styled.div`
  padding: 25px 15px;
  border-bottom: 1px solid #dee2e6;
  min-height: 60px;
  cursor: pointer;

  i.fa-times {
    color: #cfd4da;
  }
`;


export default ({color, removeColor, updateColor, selectColor}) => {
  const setTitle = ({target}) => {
    updateColor(color.id, {
      ...color,
      title: target.value
    });
  };

  const setColor = ({target}) => {
    const isValidColor = valid(target.value);
    
    if (!isValidColor) {
      return false;
    }

    const paletteColors = isValidColor ? generateColorPalette(target.value) : [];

    updateColor(color.id, {
      ...color,
      color: target.value,
      paletteColors
    });
  };

  const selectPalette = (event) => {
    event.preventDefault();
    selectColor(color.id);
  };

  return (
    <ColorBoxContainer> 
      <i onClick={() => removeColor(color.id)} className="fas fa-times"></i>
      <WordInput onChange={setTitle} placeholder="Nome da paleta de cor" />
      <Input onChange={setColor} placeholder="Cor escura" />
      <button onClick={selectPalette}>Visualizar Paleta</button>
    </ColorBoxContainer>
  );
};
