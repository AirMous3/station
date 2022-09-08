import { useState } from 'react';
import { Link } from 'react-scroll';

import { trainingFeaturesConfig } from '@/components/AboutTraining/config';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

import * as S from './components';

export const AboutTraining = () => {
  const [hoveredFeature, setHoveredFeature] = useState();
  const [isOpenDescription, setIsOpenDescription] = useState();

  const handleClick = (id) => {
    setIsOpenDescription(id);
  };

  return (
    <Container>
      <S.Section>
        <S.Article>Как проходит обчуение</S.Article>

        <S.ArticleDescription>
          За 6 месяцев Вы освоите основные навыки и инструменты, которые требуются
          DevOps-инженерам.
        </S.ArticleDescription>

        <S.FeaturesWrapper>
          {trainingFeaturesConfig.map(({ number, title, description }) => {
            let active = isOpenDescription === number;
            return (
              <S.Feature
                key={number}
                onPointerOver={() => setHoveredFeature(number)}
                onPointerOut={() => setHoveredFeature(undefined)}
                layout="preserve"
                onClick={() => handleClick(active ? undefined : number)}
              >
                {hoveredFeature === number && <S.Background layoutId="background" />}
                <S.FeatureTitle layout="preserve" number={number}>
                  {title}
                </S.FeatureTitle>
                {active && (
                  <S.FeatureDescription
                    layout="preserve"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {description}
                  </S.FeatureDescription>
                )}
                <S.CrossWrapper layout="preserve">
                  <S.Cross
                    active={active}
                    onClick={() => handleClick(active ? undefined : number)}
                  />
                </S.CrossWrapper>
              </S.Feature>
            );
          })}
        </S.FeaturesWrapper>
        <Link to={'getStarted'} smooth={true}>
          <Button>Записаться</Button>
        </Link>
      </S.Section>
    </Container>
  );
};
