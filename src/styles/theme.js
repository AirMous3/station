import { css } from 'styled-components';

export const colors = {
  background: {
    body: '#1c1c1c',
    salaryTablets: [
      'linear-gradient(118.24deg, #575758 13.43%, #3f3332 50.43%, #292221 71.65%)',
      'linear-gradient(118.24deg, #575758 13.43%, #3f3332 50.43%, #2b2831 71.65%)',
      'linear-gradient(118.24deg, #5c606d 13.43%, #6e5862 50.43%, #7a4548 71.65%)',
      'linear-gradient(118.24deg, #5c606d 13.43%, #906164 50.43%, #a5514c 71.65%)',
      'linear-gradient(118.24deg, #5c606d 13.43%, #906164 50.43%, #cb6256 71.65%)',
    ],
    linearGradients: [
      'linear-gradient(124.48deg, #FFFFFF 14.54%, rgba(237, 96, 51, 0.17) 38.19%, #4c190d 54.86%, #4c190d 88.98%);)',
      'linear-gradient(124.48deg, #FFFFFF 14.54%, rgba(237, 96, 51, 0.17) 38.19%, #4c190d 54.86%, #4c190d 88.98%);)',
      'linear-gradient(124.48deg, #FFFFFF 14.54%, rgba(237, 96, 51, 0.17) 38.19%, #e2341d 54.86%, #e2341d 88.98%);)',
      'linear-gradient(124.48deg, #FFFFFF 14.54%, rgba(237, 96, 51, 0.17) 38.19%, #f23d1e 54.86%, #f23d1e 88.98%);)',
      'linear-gradient(124.48deg, #FFFFFF 14.54%, rgba(237, 96, 51, 0.17) 38.19%, #f94822 54.86%, #f94822 88.98%);)',
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
  salaryTablets: ['0', '0', '30px', '40px', '70px'],
  tabletSalaryTablets: ['0', '0', '20px', '22px', '50px'],
  curriculum: ['-136px', '-64px', '-33px', '-30px', '-69px', '-172px'],
  curriculumMobile: ['-100px', '-77px', '-74px', '-80px', '-104px', ' -160px'],
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
