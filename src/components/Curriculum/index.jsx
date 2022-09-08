import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { curriculumConfig } from '@/components/Curriculum/config';

import * as S from './components';

export const Curriculum = () => {
  return (
    <S.Section>
      <Container>
        <S.Article>Чему вы научитесь </S.Article>
      </Container>

      <S.Features>
        <S.Circle />

        <S.FeaturesWrapper>
          {curriculumConfig.map(({ number, title, margin }) => (
            <S.FeatureWrapper key={number} margin={margin}>
              <S.FeatureNumber>{number}</S.FeatureNumber>
              <S.FeatureTitle>{title}</S.FeatureTitle>
            </S.FeatureWrapper>
          ))}
        </S.FeaturesWrapper>
      </S.Features>

      <Button>Скачать программу курса</Button>
    </S.Section>
  );
};
