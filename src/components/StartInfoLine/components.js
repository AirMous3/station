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

  ${({ theme }) => theme.below.l`
    font-size: ${({ theme }) => theme.typography.size[4]};
  `}
  ${({ theme }) => theme.below.m`
    font-size: 18px;
  `}
  ${({ theme }) => theme.below.s`
    font-size: 14px;
    padding: 10px 0;
  `}
  div {
    &:before {
      content: '/*';
      margin-right: 10px;
    }
  }
`;
