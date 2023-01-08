import styled from 'styled-components';

export const Wrapper = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.main};
  font-size: ${({ theme }) => theme.typography.size[13]};
  text-transform: uppercase;
  width: 100%;
  white-space: nowrap;
  letter-spacing: 0.07em;

  @media (max-width: 1000px) {
    font-size: 60px;
  }
  @media (max-width: 600px) {
    font-size: 40px;
  }
  @media (max-width: 450px) {
    font-size: 25px;
  }
`;
