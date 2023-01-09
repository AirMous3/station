import { motion } from 'framer-motion';
import styled, { css } from 'styled-components/macro';

import { Cross } from '@/components/AboutTraining/components';
import { ArticleTitle } from '@/components/Devops/components';

export const Section = styled.section``;

export const Title = styled(ArticleTitle)`
  line-height: 57px;
`;

export const Level = styled(motion.div)`
  position: relative;
  border-top: 2px solid #3a3a3a;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const LevelWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const LevelInfoWrapper = styled(motion.div)`
  max-width: 513px;
  @media (max-width: 1000px) {
    max-width: 766px;
  }
  @media (max-width: 450px) {
    max-width: 280px;
  }
`;

export const LevelQuarter = styled(motion.div)`
  font-weight: 500;
  font-size: 30px;
  color: #292929;
  margin-bottom: 32px;
  margin-top: 8px;

  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

export const LevelTitle = styled(motion.div)`
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color: #ffffff;

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const LevelDescription = styled(motion.div)`
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  color: #7a7a7a;
  margin-top: 16px;
  margin-bottom: 32px;

  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

export const LevelProjectTitle = styled(motion.div)`
  font-weight: 700;
  font-size: 23px;
  line-height: 110%;
  color: #ffffff;

  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export const LevelProjectDescription = styled(LevelDescription)`
  margin-top: 8px;
`;

export const CourseWrapper = styled(motion.div)`
  width: 40%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const CourseTitle = styled(LevelTitle)``;

export const CourseFeatureWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #3a3a3a;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

export const CourseFeatureTitle = styled(LevelProjectTitle)`
  max-width: 345px;
`;
export const FeatureTitleWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CourseCross = styled(Cross)`
  margin-left: auto;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LearningButton = styled.button`
  border: 1px solid #ffffff;
  background: inherit;
  font-weight: 600;
  font-size: 23px;
  color: #ffffff;
  padding: 14px 143px;
  cursor: pointer;

  @media (max-width: 450px) {
    font-size: 10px;
    max-width: 232px;
    padding: 14px 52px;
  }
`;

export const CourseFeatureDescription = styled(motion.div)`
  font-weight: 400;
  font-size: 16px;
  color: #7a7a7a;
  max-width: 350px;
  margin-top: 10px;
  margin-bottom: 20px;

  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

export const BackgroundFlash = styled(motion.div)`
  position: absolute;
  width: 405px;
  height: 350px;
  background: ${({ color }) => color};
  filter: blur(170px);
  z-index: -1;

  ${({ position }) =>
    position &&
    css`
      left: ${position.left};
      top: ${position.top};
      bottom: ${position.bottom};
      right: ${position.right};
    `}
`;
