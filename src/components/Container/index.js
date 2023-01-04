import styled from 'styled-components/macro';

export const Container = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1180px) {
    max-width: none;
    padding-right: 20px;
    padding-left: 20px;
  }
`;
