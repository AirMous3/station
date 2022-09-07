import { Container } from '@/components/Container';
import { courseFeaturesConfig } from '@/components/CourseFeatures/config';

import * as S from './components';

export const CourseFeatures = () => {
  return (
    <Container>
      <S.Wrapper>
        {courseFeaturesConfig.map(({ title, description, specialBlock }, index) => {
          return specialBlock ? (
            <S.LineBlock key={index} />
          ) : (
            <S.FeatureWrapper key={index}>
              <S.FeatureTitle>{title}</S.FeatureTitle>

              <S.FeatureDescription>{description}</S.FeatureDescription>
            </S.FeatureWrapper>
          );
        })}
      </S.Wrapper>
    </Container>
  );
};
