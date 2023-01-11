import { Container } from '@/components/Container';
import { curriculumConfig } from '@/components/Curriculum/config';

import * as S from './components';
import { useMediaQuery } from 'react-responsive';

export const Curriculum = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' });
  return (
    <S.Section>
      <Container>
        <S.Article>Чему вы научитесь </S.Article>
      </Container>
      <S.Features>
        <S.Circle />

        <S.FeaturesWrapper>
          {curriculumConfig.map(({ number, title, margin }, index) => (
            <S.FeatureWrapper key={number} isMobile={isMobile} index={index}>
              <S.FeatureNumber>{number}</S.FeatureNumber>
              <S.FeatureTitle>{title}</S.FeatureTitle>
            </S.FeatureWrapper>
          ))}
        </S.FeaturesWrapper>
      </S.Features>
    </S.Section>
  );
};
