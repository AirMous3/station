import { motion } from 'framer-motion';
import styled from 'styled-components';

import arrow from '@/assets/icons/arrowDown.svg';
import { Container } from '@/components/Container';

export const Section = styled.section`
  overflow-x: clip;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: ${({ theme }) => theme.colors.text.additional};
  max-width: 164px;
  text-align: center;
  user-select: none;

  @media (max-width: 650px) {
    font-size: 19px;
  }
  @media (max-width: 450px) {
    font-size: 13px;
  }
`;

export const RevertDescription = styled(Description)`
  display: flex;
  align-items: end;
  margin-bottom: 137px;
`;

export const DevopsTitle = styled(motion.h1)`
  font-family: Generator;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[17]};
  color: ${({ theme }) => theme.colors.text.main};
  text-transform: uppercase;
  position: absolute;
  z-index: 1;
  letter-spacing: 22px;

  @media (max-width: 886px) {
    font-size: 127px;
  }
  @media (max-width: 656px) {
    font-size: 114px;
  }
  @media (max-width: 456px) {
    font-size: 68px;
    letter-spacing: 11px;
  }
`;

export const ProgramTitle = styled(DevopsTitle)`
  z-index: 3;
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-left: -200px;
`;

export const FirstImage = styled.img`
  width: 100%;

  ${({ theme }) => theme.below.s`
    width: 90%;
  `};

  @media (max-width: 650px) {
    width: 66%;
    bottom: 0;
    position: relative;
    left: 12%;
  }
  @media (max-width: 450px) {
    width: 225px;
    left: 20%;
  }

}

`;

export const SecondMainImage = styled.img`
  position: absolute;
  bottom: 15px;
  right: -173px;
  z-index: 2;

  ${({ theme }) => theme.below.m`
    bottom: 13px;
  `}

  ${({ theme }) => theme.below.s`
    width: 75%;
    right: -110px;
  `};

  @media (max-width: 650px) {
    width: 65%;
  }

  @media (max-width: 450px) {
    width: 200px;
    right: -140px;
  }
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

export const Circle = styled.div`
  position: absolute;
  color: #ebebeb;
  font-size: 18px;
  bottom: 115px;
  left: 120px;
  cursor: pointer;
  z-index: 10;

  &:after {
    content: url(${arrow});
    display: block;
    margin-top: -131px;
  }

  @media (max-width: 450px) {
    bottom: 74px;
    left: 100px;
    font-size: 12px;
    &:after {
      margin-top: -100px;
    }
  }
`;

export const MainContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  min-height: 760px;
  padding: 70px 0 0px;

  @media (max-width: 650px) {
    min-height: 600px;
  }
  @media (max-width: 450px) {
    min-height: 420px;
  }
`;
