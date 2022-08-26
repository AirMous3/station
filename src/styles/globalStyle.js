import { createGlobalStyle } from 'styled-components';

import inter from '@/assets/fonts/inter/inter.css';
import namu from '@/assets/fonts/namu/namu.css';
import roboto from '@/assets/fonts/roboto/roboto.css';

export const GlobalStyle = createGlobalStyle`

  body {
    touch-action: none;
    margin: 0;
    background: ${({ theme }) => theme.colors.background.body};
    font-family: ${inter && namu && roboto};
  }

  ul,
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

`;
