import { motion } from 'framer-motion';
import styled from 'styled-components';

import image from '@/assets/backgroundImage.jpg';

export const Section = styled(motion.section)`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image});
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
`;

export const Description = styled(motion.div)`
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: ${({ theme }) => theme.colors.text.additional};
  max-width: 164px;
  text-align: center;
  user-select: none;
`;

export const RevertDescription = styled(Description)`
  display: flex;
  align-items: end;

  ${({ theme }) => theme.below.m`
    display: none;
  `}
`;

export const Title = styled(motion.h1)`
  font-family: Generator;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[17]};
  color: ${({ theme }) => theme.colors.text.main};
  text-transform: uppercase;
  z-index: 2;

  ${({ theme }) => theme.below.m`
    font-size: 140px;
  `}

  ${({ theme }) => theme.below.s`
    font-size: 115px;
  `}
`;
export const TitleWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled(motion.div)`
  position: relative;
  margin-left: -20%;

  ${({ theme }) => theme.below.m`
    margin-left: 55px;
    margin-top: 106px;
  `}
`;

export const FirstImage = styled(motion.img)`
  width: 100%;

  ${({ theme }) => theme.below.s`
    width: 90%;
  `}
`;

export const SecondMainImage = styled(motion.img)`
  position: absolute;
  bottom: -46px;
  right: -324px;
  width: 100%;

  ${({ theme }) => theme.below.m`
    bottom: -46px;
  `}

  ${({ theme }) => theme.below.s`
    width: 75%;
    right: -110px;
  `}
`;

export const StartWrapper = styled(motion.div)`
  font-family: NAMU;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[9]};
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.text.main};
`;

export const Wrapper = styled(motion.div)`
  display: flex;
  height: 100%;
  align-items: center;
  flex: 1;
  justify-content: space-around;
`;
