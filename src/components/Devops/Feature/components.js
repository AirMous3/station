import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;
export const Number = styled.div`
  font-family: NAMU;
  font-size: ${({ theme }) => theme.typography.size[17]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.blue};
  margin-bottom: 20px;

  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `}

  ${({ theme }) => theme.below.l`
    font-size: 130px;
  `}
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: ${({ theme }) => theme.colors.text.grey};
  max-width: ${({ maxWidth }) => maxWidth};
  text-align: center;

  ${({ theme }) => theme.below.l`
    font-size: 21px;
  `}
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.typography.size[7]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.main};
  position: absolute;
  top: 81px;
  left: 42px;
  max-width: 206px;
  text-align: center;

  ${({ theme }) => theme.below.l`
    font-size: 26px;
  `}
`;
