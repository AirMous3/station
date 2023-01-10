import styled from 'styled-components/macro';

import {
  BackgroundFlash,
  EnglishButton,
  EnglishFeatureDescription,
  EnglishFeatureNumber,
  EnglishFeatureTitle,
  EnglishTitle,
} from '@/components/PackageCost/components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
`;

export const EnglishTitleML = styled(EnglishTitle)`
  margin-bottom: 20px;
`;

export const EnglishFeatureML = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

export const EnglishFeatureTitleML = styled(EnglishFeatureTitle)``;

export const EnglishFeatureDescriptionML = styled(EnglishFeatureDescription)``;

export const EnglishFeatureNumberML = styled(EnglishFeatureNumber)``;

export const BackgroundFlashML = styled(BackgroundFlash)``;

export const EnglishButtonML = styled(EnglishButton)``;
