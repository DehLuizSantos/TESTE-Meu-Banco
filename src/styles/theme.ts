export function pxToRem(pxValue: number) {
  const baseFontSizePx = 16; // Tamanho da fonte base em pixels
  const remValue = pxValue / baseFontSizePx;
  return remValue + 'rem';
}

export const commonColors = {
  success: '#03C668',
  alert: '#FFd638',
  blue: '#43B7FF',
  red: '#DE0015',
};

export const primaryColors = {
  gray: '#484848',
  white: '#FAFAFA',
  green: ' #1BC681',
  dark: '#1E1E1E',
};

export const fontSizes = {
  xSmall: pxToRem(14),
  small: pxToRem(16),
  meddium: pxToRem(18),
  large: pxToRem(24),
  xLarge: pxToRem(32),
};
export const responsive = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const theme = {
  colors: {
    ...commonColors,
    ...primaryColors,
  },
  sizes: {
    ...fontSizes,
  },
  responsive: { ...responsive },
};

export type ThemeType = typeof theme;
