import { css } from 'styled-components';

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

export const theme = { above, below };
