import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Roboto;
  position: relative;
  max-width: 30%;
  margin-bottom: 50px;
`;
export const Number = styled.div`
  font-family: NAMU;
  font-size: ${({ theme }) => theme.typography.size[17]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.blue};
  margin-bottom: 20px;

  ${({ theme }) => theme.below.l`
    font-size: 130px;
  `}
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: ${({ theme }) => theme.colors.text.grey};
  max-width: 318px;
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
  top: 95px;
  left: 55px;
  max-width: 215px;
  text-align: center;

  ${({ theme }) => theme.below.l`
    font-size: 26px;
  `}
`;
