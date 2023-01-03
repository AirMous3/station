import styled from 'styled-components';

export const BurgerWrap = styled.button`
  cursor: pointer;
  padding: 0;
  border: none;
  background: none;
  margin-left: auto;
  position: relative;
  z-index: 1000;

  @media (min-width: 1151px) {
    display: none;
  }
`;

export const BurgerBar = styled.span`
  display: block;
  width: 28px;
  height: 4px;
  border-radius: 5px;
  background: #ffffff;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;
