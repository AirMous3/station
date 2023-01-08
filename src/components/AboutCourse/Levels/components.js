import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import arrowImage from '@/assets/icons/arrow.svg';

export const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 90px;
  color: white;
  min-height: 180px;
`;
export const LevelsWrapper = styled(motion.div)`
  display: flex;
  gap: 25px;
  align-items: center;

  @media (max-width: 450px) {
    gap: 5px;
  }
`;
export const LevelNumber = styled(motion.div)`
  font-family: Generator;
  font-size: ${({ theme }) => theme.typography.size[7]};
  color: ${({ theme }) => theme.colors.text.darkGrey};

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
export const LevelTitle = styled(motion.div)`
  font-weight: 700;
  font-size: 65px;

  @media (max-width: 1000px) {
    font-size: 45px;
    padding-bottom: 10px;
  }
  @media (max-width: 800px) {
    font-size: 35px;
  }
  @media (max-width: 450px) {
    font-size: 25px;
  }
`;

export const ArrowButton = styled.div`
  border-radius: 50%;
  min-width: 112px;
  min-height: 112px;
  border: 3px solid #50dadd;
  background-image: url(${arrowImage});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: display 0.5s ease-in-out;

  ${({ active }) =>
    active &&
    css`
      display: none;
    `};

  @media (max-width: 1000px) {
    min-width: 80px;
    min-height: 80px;
  }
  @media (max-width: 600px) {
    min-width: 45px;
    min-height: 45px;
    background-size: 25px;
  }
`;

export const LevelDescription = styled(motion.div)`
  font-weight: 500;
  max-width: 475px;
  font-size: ${({ theme }) => theme.typography.size[4]};

  @media (max-width: 1000px) {
    max-width: 400px;
    font-size: 17px;
  }
  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

export const LevelWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #3a3a3a;
  width: 100%;
  padding: 30px 50px;
  min-height: 180px;
  box-sizing: border-box;

  ${({ active }) =>
    active &&
    css`
      background: linear-gradient(
        90deg,
        #4ed3df 3.05%,
        #357fee 35.48%,
        #243a5c 62.35%,
        #1c1c1c 86.3%
      );
    `};

  @media (max-width: 1000px) {
    padding: 14px 20px;
    min-height: 135px;

    ${({ active }) =>
      active &&
      css`
        flex-direction: column;
        align-items: normal;
      `};
  }
  @media (max-width: 600px) {
    min-height: 98px;
  }
`;
