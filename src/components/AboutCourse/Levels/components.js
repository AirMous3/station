import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import arrowImage from '@/assets/icons/arrow.svg';

export const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 90px;
  color: white;
  min-height: 180px;
  position: relative;
  z-index: 2;
`;
export const LevelsWrapper = styled(motion.div)`
  display: flex;
  gap: 25px;
  align-items: center;
`;
export const LevelNumber = styled(motion.div)`
  font-family: Generator;
  font-size: ${({ theme }) => theme.typography.size[7]};
  color: ${({ theme }) => theme.colors.text.darkGrey};
`;
export const LevelTitle = styled(motion.div)`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[12]};
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
    `}
`;

export const LevelDescription = styled(motion.div)`
  font-weight: 500;
  max-width: 475px;
  font-size: ${({ theme }) => theme.typography.size[4]};
`;

export const LevelWrapper = styled.div`
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
    `}
`;
