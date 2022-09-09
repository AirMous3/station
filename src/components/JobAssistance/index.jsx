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
          <S.LeftFeatures>
            {leftJobFeatures.map(({ title, description }) => (
              <S.Feature key={title}>
                <S.FeatureTitle>{title}</S.FeatureTitle>
                <S.FeatureDescription>{description}</S.FeatureDescription>
                <S.Circle />
              </S.Feature>
            ))}
          </S.LeftFeatures>
          <S.RightFeatures>
            {rightJobFeatures.map(({ title, description }) => (
              <S.Feature key={title}>
                <S.FeatureTitle>{title}</S.FeatureTitle>
                <S.FeatureDescription>{description}</S.FeatureDescription>
                <S.CircleRight />
              </S.Feature>
            ))}
          </S.RightFeatures>
        </S.Features>
      </Container>
    </S.Section>
  );
};
