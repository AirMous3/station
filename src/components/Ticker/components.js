import styled from 'styled-components';

export const Wrapper = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.main};
  font-size: ${({ theme }) => theme.typography.size[13]};
  text-transform: uppercase;
  width: 100%;
  white-space: nowrap;
  letter-spacing: 0.07em;
`;
