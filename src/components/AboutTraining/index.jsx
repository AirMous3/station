import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

import { AboutTrainingMobile } from '@/components/AboutTraining/mobileLayout';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { HIDDEN, PRESERVE, VISIBLE } from '@/constants/framer';

import { FEATURE_DESCRIPTION_ANIMATION } from './animations';
import * as S from './components';
import { trainingFeaturesConfig } from './config';

export const AboutTraining = () => {
  const [hoveredFeature, setHoveredFeature] = useState();
  const [isOpenDescription, setIsOpenDescription] = useState();

  const handleClick = (id) => {
    setIsOpenDescription(id);
  };
  const isMobile = useMediaQuery({ query: '(max-width: 1100px)' });

  return (
    <S.Section id={'education'}>
      <Container>
        <S.BackgroundFlash />
        <S.BackgroundFlashSecond />
        <S.Article>Как проходит обчуение</S.Article>

        <S.ArticleDescription>
          За 6 месяцев Вы освоите основные навыки и инструменты, которые
          требуются DevOps-инженерам.
        </S.ArticleDescription>

        <S.FeaturesWrapper layout={PRESERVE}>
          {isMobile ? (
            <AboutTrainingMobile />
          ) : (
            trainingFeaturesConfig.map(({ number, title, description }) => {
              const active = isOpenDescription === number;
              return (
                <S.Feature
                  key={number}
                  layout={PRESERVE}
                  initial={HIDDEN}
                  animate={VISIBLE}
                  onClick={() => handleClick(active ? undefined : number)}
                  onPointerOver={() => setHoveredFeature(number)}
                  onPointerOut={() => setHoveredFeature(undefined)}
                >
                  {hoveredFeature === number && (
                    <S.Background layoutId="background" />
                  )}
                  <S.FeatureTitle layout={PRESERVE} number={number}>
                    {title}
                  </S.FeatureTitle>
                  {active && (
                    <S.FeatureDescription
                      layout={PRESERVE}
                      variants={FEATURE_DESCRIPTION_ANIMATION}
                    >
                      {description}
                    </S.FeatureDescription>
                  )}
                  <S.CrossWrapper layout={PRESERVE}>
                    <S.Cross
                      layout={PRESERVE}
                      animate={
                        active ? { y: -60, rotate: 405 } : { y: 0, rotate: 0 }
                      }
                      exit={{ y: 0 }}
                      transition={{ duration: 0.5 }}
                      onClick={() => handleClick(active ? undefined : number)}
                    />
                  </S.CrossWrapper>
                </S.Feature>
              );
            })
          )}
        </S.FeaturesWrapper>
        <Link to="getStarted" smooth={true}>
          <Button>Записаться</Button>
        </Link>
      </Container>
    </S.Section>
  );
};
