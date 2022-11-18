import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ArticleTitle } from '@/components/Devops/components';

export const Section = styled.section`
  position: relative;
  margin-top: 170px;
  margin-bottom: 150px;
`;

export const Article = styled(ArticleTitle)`
  max-width: 450px;
  margin-bottom: 70px;
`;

export const Features = styled.div`
  display: flex;
`;

export const Circle = styled(motion.div)`
  position: relative;
  width: 588px;
  height: 588px;
  border-radius: 50%;
  margin-left: -13%;
  background: ${({ theme }) => theme.colors.background.body};

  &:before {
    content: '';
    position: absolute;
    top: -4px;
    bottom: -6px;
    left: -2px;
    right: -6px;
    background: linear-gradient(
      326.78deg,
      #fe6f5f 11.13%,
      rgba(0, 0, 0, 0) 73.02%
    );
    border-radius: 50%;
    z-index: -1;
  }
  &:after {
    content: '';
    position: absolute;
    width: 409px;
    height: 440px;
    left: 0;
    top: 0;
    background: linear-gradient(180deg, #1f95b7 0%, #8123a2 100%);
    filter: blur(248px);
    transform: rotate(26.63deg);
  }
`;

export const FeaturesWrapper = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 45px;
  max-width: 771px;
  margin-top: 30px;
`;

export const FeatureNumber = styled.div`
  position: relative;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[9]};
  color: ${({ theme }) => theme.colors.text.main};
  border-radius: 50%;
  min-width: 55px;
  min-height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 9px 6px rgba(176, 173, 184, 0.2);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: linear-gradient(180deg, #4f4f4f 0%, #a7a7a7 100%);
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    z-index: -1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: linear-gradient(180deg, #2037fb 0%, #50dadd 100%);
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    z-index: -1;
  }
`;

export const FeatureWrapper = styled.li`
  display: flex;
  gap: 25px;
  align-items: center;
  z-index: 2;
  margin-left: ${({ margin }) => margin};
  transition: background 0.8s;

  &:hover {
    ${FeatureNumber} {
      box-shadow: 0px 0px 9px 6px rgb(41 111 131 / 65%);

      &:after {
        opacity: 1;
        visibility: visible;
      }

      &:before {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`;

export const FeatureTitle = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: ${({ theme }) => theme.colors.text.lightGrey};
`;

export const BackgroundFlash = styled.div`
  position: absolute;
  width: 288px;
  height: 214.02px;
  left: 0;
  top: 249.55px;
  z-index: -1;
  background: linear-gradient(180deg, #1f95b7 0%, #8123a2 100%);
  filter: blur(100px);
  transform: rotate(26.63deg);
`;
