import { useState } from 'react';

import { trainingFeaturesConfig } from '@/components/AboutTraining/config';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

import * as S from './components';

export const AboutTraining = () => {
  const [hoveredFeature, setHoveredFeature] = useState();

  return (
    <Container>
      <S.Section>
        <S.Article>Как проходит обчуение</S.Article>

        <S.ArticleDescription>
          За 6 месяцев Вы освоите основные навыки и инструменты, которые требуются
          DevOps-инженерам.
        </S.ArticleDescription>

        <S.FeaturesWrapper>
          {trainingFeaturesConfig.map(({ number, title }) => (
            <S.Feature
              key={number}
              onPointerOver={() => setHoveredFeature(number)}
              onPointerOut={() => setHoveredFeature(undefined)}
            >
              {hoveredFeature === number && <S.Background layoutId="background" />}

              <S.FeaturesTitle number={number}>{title}</S.FeaturesTitle>

              <S.Cross />
            </S.Feature>
          ))}
        </S.FeaturesWrapper>

        <Button>Записаться</Button>
      </S.Section>
    </Container>
  );
};
