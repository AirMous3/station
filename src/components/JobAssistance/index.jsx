import { Container } from '@/components/Container';
import { leftJobFeatures, rightJobFeatures } from '@/components/JobAssistance/config';

import * as S from './components';

export const JobAssistance = () => {
  return (
    <S.Section>
      <S.Title>
        Как вы <span>найдете</span> работу
      </S.Title>
      <Container>
        <S.Features>
          <S.BackgroundFlash />

          <S.LeftFeatures>
            {leftJobFeatures.map(({ title, description }) => (
              <S.FeatureWrapper key={title}>
                <S.Feature>
                  <S.FeatureTitle>{title}</S.FeatureTitle>
                  <S.FeatureDescription>{description}</S.FeatureDescription>
                </S.Feature>
                <S.Circle />
              </S.FeatureWrapper>
            ))}
          </S.LeftFeatures>

          <S.RightFeatures>
            {rightJobFeatures.map(({ title, description }) => (
              <S.FeatureWrapper key={title}>
                <S.Feature>
                  <S.FeatureTitle>{title}</S.FeatureTitle>
                  <S.FeatureDescription>{description}</S.FeatureDescription>
                </S.Feature>
                <S.CircleRight />
              </S.FeatureWrapper>
            ))}
          </S.RightFeatures>
        </S.Features>
      </Container>
    </S.Section>
  );
};
