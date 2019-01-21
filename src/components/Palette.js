import React, { Component } from 'react';
import ColorsContext from '../contexts/ColorsContext';
import styled from 'styled-components';

const ColorView = styled.div`
  width: 100%;
  height: 200px;
  background: #FFF;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
  background: ${props => props.background || 'transparent'};
  position: relative;
`;

const ColorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 12px;
`;


export default () => (
  <ColorsGrid>
    <ColorsContext.Consumer>
      {
        ({selected}) => 
          selected && selected.paletteColors.map(color => {
            return (
              <ColorView key={color} background={color}>
                <span>{color}</span>
              </ColorView>
            );
        })
      }
    </ColorsContext.Consumer>
  </ColorsGrid>
);
