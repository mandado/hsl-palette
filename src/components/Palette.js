import React, { Component } from 'react';
import ColorsContext from '../contexts/ColorsContext';
import styled from 'styled-components';
import chroma from 'chroma-js';

const ColorView = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0 2px 4px inset rgba(0, 0, 0, .12);
  background: ${props => props.background || 'transparent'};
  color: ${props => props.color || '#FFF'};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
            const luminance = chroma(color).luminance();

            return (
              <ColorView color={luminance <= .5 ? '#FFF' : '#000'} key={color} background={color}>
                <span>{color}</span>
              </ColorView>
            );
        })
      }
    </ColorsContext.Consumer>
  </ColorsGrid>
);
