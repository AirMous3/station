import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size[4]};
  //TODO
  background: linear-gradient(89.97deg, #fe6f5f -4.83%, #ff2e16 105.37%);
  max-width: 326px;
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.main};
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;
