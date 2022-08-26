import { css } from 'styled-components';

export const colors = {
  background: {
    body: '#1c1c1c',
  },
  text: {
    main: '#ffffff',
    secondary: '#000000',
    additional: 'rgba(196, 196, 196, 0.06);',
    turquoise: '#53cbd8',
    blue: '#3B92EA',
    grey: '#C3C3C3',
  },
};

export const typography = {
  size: [
    '14px', // 0
    '16px', // 1
    '20px', // 2
    '22px', // 3
    '23px', // 4
    '25px', // 5
    '27px', // 6
    '30px', // 7
    '32px', // 8
    '37px', // 9
    '55px', // 10
    '60px', // 11
    '80px', // 12
    '90px', // 13
    '116px', // 14
    '120px', // 15
    '140px', // 16
    '150px', // 17
    '300px', // 18
    '350px', // 19
  ],
};

export const breakpoints = {
  xs: 320,
  xxs: 360,
  sm: 450,
  md: 768,
  xl: 1000,
};

const above = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${breakpoints[key]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const below = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (max-width: ${breakpoints[key]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const theme = { above, below, colors, typography };
