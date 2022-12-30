import styled from 'styled-components/macro';

export const Container = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;

  // ${({ theme }) => theme.below.xxl`
  //   max-width: 1280px;
  //   padding-left: 85px;
  //   padding-right: 85px;
  // `}
`;
