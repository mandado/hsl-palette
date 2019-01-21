import chroma from 'chroma-js';

export const generateColorPalette = (darkenColor) => {
  const [h] = chroma(darkenColor).hsl();
  
  return [
    chroma([h, .57, .15, 1], 'hsl').css('hsl'),
    chroma([h, .66, .27, 1], 'hsl').css('hsl'),
    chroma([h, .69, .38, 1], 'hsl').css('hsl'),
    chroma([h, .64, .48, 1], 'hsl').css('hsl'),
    chroma([h, .62, .62, 1], 'hsl').css('hsl'),
    chroma([h, .83, .81, 1], 'hsl').css('hsl'),
    chroma([h, 1, .97, 1], 'hsl').css('hsl'),
  ];
}
