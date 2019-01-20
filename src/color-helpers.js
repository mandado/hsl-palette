import chroma from 'chroma-js';

const getLightnessColor = (color) => {
  const [h] = chroma(color).hsl();
  
  return chroma([h, 1, .97, 1], 'hsl').css('hsl');
};

export const generateColorPalette = (darkenColor) => {
  const lightColor = getLightnessColor(darkenColor);
  
  return chroma.scale([
    lightColor, 
    darkenColor
  ]).mode('hsl').colors(7);
}