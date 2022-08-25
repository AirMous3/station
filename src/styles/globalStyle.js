import { createGlobalStyle } from 'styled-components';

import namu from '@/assets/fonts/namu/namu.css';

export const GlobalStyle = createGlobalStyle`

  body {
    touch-action: none;
    margin: 0;
    background: #1c1c1c;
  }

  ul,
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

`;
