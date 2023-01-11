import { motion } from 'framer-motion';
import styled from 'styled-components/macro';

import cross from '@/assets/icons/cross.svg';
import { ArticleTitle } from '@/components/Devops/components';

export const Section = styled.section`
  position: relative;
  margin-top: 35px;
  margin-bottom: 150px;
`;

export const Article = styled(ArticleTitle)`
  margin-bottom: 55px;
`;

export const ArticleDescription = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size[7]};
  color: ${({ theme }) => theme.colors.text.lightGrey};
  max-width: 870px;

  @media (max-width: 1100px) {
    font-size: 16px;
    max-width: 425px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 450px) {
    font-size: 10px;
    max-width: 262px;
  }
`;

export const FeaturesWrapper = styled.ul`
  position: relative;
  margin-top: 65px;
  margin-bottom: 96px;

  @media (max-width: 600px) {
    margin-top: 35px;
  }
  @media (max-width: 450px) {
    margin-top: 0;
  }
`;

export const Cross = styled(motion.div)`
  position: relative;
  background-image: url(${cross});
  background-repeat: no-repeat;
  background-position: center;
  width: 15px;
  height: 15px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 10px;
    height: 10px;
  }
`;

export const CrossWrapper = styled(motion.div)`
  margin-left: auto;
  margin-right: 15px;
`;

export const Feature = styled(motion.li)`
  position: relative;
  display: flex;
  align-items: center;
  // TODO
  border-bottom: 1px solid #535353;
  color: ${({ theme }) => theme.colors.text.main};
  transition: color ease-in 0.5s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text.darkGrey};

    ${Cross} {
      filter: brightness(0);
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
  }
  
  @media (max-width: 650px) {
    &:hover {
      ${Cross} {
        filter: none;
      }
    }
  }
`;

export const FeatureTitle = styled(motion.div)`
  position: relative;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: inherit;
  padding: 42px 10px 32px 15px;
  max-width: 326px;
  box-sizing: border-box;

  &:after {
    content: '${({ number }) => number}';
    width: 19px;
    height: 19px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.typography.size[1]};
    //  TODO
    color: #3783cf;
    position: absolute;
    top: 30px;
    right: -10px;
  }

  @media (max-width: 1100px) {
    font-size: 20px;
    max-width: 386px;
  }
  @media (max-width: 600px) {
    font-size: 15px;
    max-width: 297px;
  }
  @media (max-width: 450px) {
    font-size: 12px;
    max-width: 240px;
    padding: 16px 10px 16px 15px;

    :after {
      font-size: 8px;
      top: 10px;
      right: -12px;
    }
  }
`;

export const FeatureDescription = styled(motion.div)`
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.size[2]};
  max-width: 476px;
  margin: 32px 0 32px 200px;
  @media (max-width: 1100px) {
    font-size: 16px;
    margin: 24px 66px 32px 12px;
    max-width: none;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    color: white;
  }
  @media (max-width: 450px) {
    font-size: 8px;
    margin: 0px 66px 12px 12px;
  }
`;

export const Background = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 1px;
  left: 0;
  background-color: ${({ theme }) => theme.colors.text.main};
  z-index: -1;
`;

export const BackgroundFlash = styled.div`
  position: absolute;
  width: 311px;
  height: 331px;
  top: 118px;
  right: 456px;
  background: linear-gradient(180deg, #420c64c2 0%, #1f9bbd80 100%);
  filter: blur(89px);
  z-index: -1;
`;

export const BackgroundFlashSecond = styled(BackgroundFlash)`
  top: 440px;
  right: 0;
  background: linear-gradient(180deg, #1f95b7 0%, #8123a2d6 100%);
`;
