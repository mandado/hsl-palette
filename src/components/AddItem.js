import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const AddItemContainer = styled.div`
  grid-area: add-item;
  height: 50px;
  padding: 15px;
`;

export default ({colors, addColor}) => (
  <AddItemContainer>
    <Button onClick={() => addColor({id: colors.length + 1})}>
      <i className="fas fa-plus"></i>
      Adicionar 
    </Button>
  </AddItemContainer>
);
