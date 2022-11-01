import styled from 'styled-components/macro';

import { Cross, CrossWrapper } from '@/components/AboutTraining/components';
import { ArticleTitle } from '@/components/Devops/components';

export const Section = styled.section``;

export const Title = styled(ArticleTitle)`
  line-height: 57px;
`;

export const Level = styled.div`
  border-top: 2px solid #3a3a3a;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const LevelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LevelInfoWrapper = styled.div`
  max-width: 513px;
`;

export const LevelQuarter = styled.div`
  font-weight: 500;
  font-size: 30px;
  color: #292929;
  margin-bottom: 32px;
  margin-top: 8px;
`;

export const LevelTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color: #ffffff;
`;

export const LevelDescription = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  color: #7a7a7a;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const LevelProjectTitle = styled.div`
  font-weight: 700;
  font-size: 23px;
  line-height: 110%;
  color: #ffffff;
`;

export const LevelProjectDescription = styled(LevelDescription)`
  margin-top: 8px;
`;

export const LevelCourseWrapper = styled.div`
  width: 40%;
`;

export const LevelCourseTitle = styled(LevelTitle)`
  margin-bottom: 50px;
`;

export const LevelCourseFeatureWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #3a3a3a;
  padding-top: 24px;
  padding-bottom: 8px;
`;

export const LevelCourseFeatureTitle = styled(LevelProjectTitle)`
  max-width: 345px;
`;

export const LevelCourseCross = styled(Cross)`
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
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 23px;
  color: #ffffff;
  padding: 14px 143px;
  cursor: pointer;
`;
