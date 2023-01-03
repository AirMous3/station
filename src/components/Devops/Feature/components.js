import { motion } from 'framer-motion';
import styled, { css } from 'styled-components/macro';

export const Number = styled.div`
  font-family: NAMU;
  font-size: ${({ theme }) => theme.typography.size[17]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.blue};
  margin-bottom: 20px;

  @media (max-width: 1180px) {
    font-size: 140px;
  }
  @media (max-width: 950px) {
    font-size: 130px;
  }
  @media (max-width: 800px) {
    font-size: 150px;
    margin-bottom: 0;
  }
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.typography.size[7]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.main};
  position: absolute;
  top: 81px;
  left: 42px;
  max-width: 208px;
  text-align: center;

  @media (max-width: 1180px) {
    font-size: 26px;
  }
  @media (max-width: 950px) {
    font-size: 23px;
  }
`;

export const Wrapper = styled(motion.div)`
  position: relative;

  @media (max-width: 950px) {
    max-width: 255px;
  }

  @media (max-width: 800px) {
    width: 100%;
    max-width: none;

    &:nth-child(even) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      ${Title} {
        right: 42px;
        left: auto;
      }

      ${Number} {
        margin-right: 45px;
      }
    }
  }
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: ${({ theme }) => theme.colors.text.grey};
  max-width: ${({ maxWidth }) => maxWidth};
  text-align: center;

  @media (max-width: 1180px) {
    font-size: 19px;
  }
  @media (max-width: 950px) {
    font-size: 16px;
  }
  @media (max-width: 800px) {
    font-size: 19px;
  }
  @media (max-width: 620px) {
    font-size: 16px;
  }
`;
