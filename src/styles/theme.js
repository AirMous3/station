import { css } from 'styled-components';

export const colors = {
  background: {
    body: '#1c1c1c',
    salaryTablets: [
      'linear-gradient(118.24deg, rgba(255, 255, 255, 0.26) 13.43%, rgba(254, 111, 95, 0.05) 71.65%)',
      'linear-gradient(118.24deg, rgba(255, 255, 255, 0.26) 13.43%, rgba(254, 111, 95, 0.05) 71.65%, rgba(254, 111, 95, 0.2) 71.65%)',
      'linear-gradient(118.24deg, rgba(255, 255, 255, 0.26) 13.43%, rgba(254, 111, 95, 0.4) 71.65%)',
      'linear-gradient(118.24deg, rgba(255, 255, 255, 0.26) 13.43%, rgba(254, 111, 95, 0.6) 71.65%)',
      'linear-gradient(117.07deg, rgba(255, 255, 255, 0.26) 13.44%, rgba(254, 111, 95, 0.8) 90.75%)',
    ],
    feedback: '#F8F8F8',
  },
  text: {
    main: '#ffffff',
    secondary: '#000000',
    additional: 'rgba(196, 196, 196, 0.06);',
    turquoise: '#53cbd8',
    blue: '#3B92EA',
    grey: '#C3C3C3',
    darkGrey: '#5E5E5E',
    lightGrey: '#BCBCBC',
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

export const margin = {
  salaryTablets: ['10px', '20px', '30px', '40px', '70px'],
};

export const breakpoints = {
  xxxs: 300,
  xxs: 400,
  xs: 500,
  s: 800,
  m: 1024,
  l: 1280,
  xl: 1366,
  xxl: 1440,
  xxxl: 1600,
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

export const theme = { above, below, colors, typography, margin };
