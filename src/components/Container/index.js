import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  ${({ theme }) => theme.below.xxl`
    max-width: 1280px;
    padding-left: 50px;
    padding-right: 50px;
  `}
`;
