import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Section = styled.section`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  min-height: 760px;
  padding: 70px 0 0px;
`;

export const Description = styled.div`
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

export const DevopsTitle = styled(motion.h1)`
  font-family: Generator;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[17]};
  color: ${({ theme }) => theme.colors.text.main};
  text-transform: uppercase;
  position: absolute;
  z-index: 1;
`;

export const ProgramTitle = styled(DevopsTitle)`
  z-index: 3;
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-left: -200px;

  ${({ theme }) => theme.below.m`
    margin-left: 55px;
    margin-top: 106px;
  `}
`;

export const FirstImage = styled.img`
  width: 100%;

  ${({ theme }) => theme.below.s`
    width: 90%;
  `}
`;

export const SecondMainImage = styled.img`
  position: absolute;
  bottom: 15px;
  right: -210px;
  z-index: 2;

  ${({ theme }) => theme.below.m`
    bottom: -46px;
  `}

  ${({ theme }) => theme.below.s`
    width: 75%;
    right: -110px;
  `}
`;

export const Char = styled.span`
  transform: rotate(-${({ number }) => number + 8 * 2}deg);
  transform-origin: bottom center;
`;

export const BackgroundFlash = styled.div`
  position: absolute;
  width: 288px;
  height: 214.02px;
  left: 0;
  top: 249.55px;
  z-index: -1;
  background: #3c97ea;
  filter: blur(100px);
  transform: rotate(26.63deg);
`;
export const SecondBackgroundFlash = styled.div`
  position: absolute;
  width: 284.5px;
  height: 284.14px;
  left: 117px;
  bottom: 91px;
  z-index: -1;
  background: rgba(79, 213, 222, 0.6);
  filter: blur(100px);
  transform: rotate(26.63deg);
`;
