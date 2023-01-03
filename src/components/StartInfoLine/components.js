import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: NAMU;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[6]};
  text-align: center;
  border-top: 4px solid white;
  border-bottom: 4px solid white;
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.text.main};
  display: flex;
  justify-content: space-around;
  line-height: 43.2px;

  div {
    &:before {
      content: '/*';
      margin-right: 10px;
    }
  }

  ${({ theme }) => theme.below.l`
    font-size: ${({ theme }) => theme.typography.size[4]};
  `}
  ${({ theme }) => theme.below.m`
    font-size: 18px;
    padding: 0;
  `}
  ${({ theme }) => theme.below.s`
    font-size: 14px;
    padding: 5px 0;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  `};

  @media (max-width: 650px) {
    font-size: 12px;
    padding: 0;
  }
  @media (max-width: 545px) {
    font-size: 10px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    div {
      &:before {
        content: '/*';
        margin-right: 2px;
      }
    }
  }
`;
