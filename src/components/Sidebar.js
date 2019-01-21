import React from 'react';
import styled from 'styled-components';
import AddItem from './AddItem';
import ColorBox from './ColorBox';
import ColorsContext from '../contexts/ColorsContext';

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  background: #FFF;
  height: 100%;
  border-right: 1px solid #dee2e6;
`;

const Content = styled.div`
  height: 100%;
  max-height: 580px;
  overflow-y: auto;
`;

export default () => (
  <ColorsContext.Consumer>
    {({colors, addColor, removeColor, updateColor, selectColor}) => (
    <Container>
      <Content>
        {
          colors.length > 0 && colors.map(color => {
            return (
              <ColorBox 
                key={color.id} 
                color={color} 
                updateColor={updateColor}
                removeColor={removeColor} 
                selectColor={selectColor} 
              />
            );
          })
        }
      </Content>
      <AddItem 
        colors={colors} 
        addColor={addColor}
      />
    </Container>
    )}
  </ColorsContext.Consumer>
);
