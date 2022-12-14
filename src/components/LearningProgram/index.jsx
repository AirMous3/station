import { useState } from 'react';

import { Container } from '@/components/Container';
import { Accordion } from '@/components/LearningProgram/Accordion';
import {
  firstPartOfProgram,
  secondPartOfProgram,
} from '@/components/LearningProgram/config';
import { PRESERVE } from '@/constants/framer';

import * as S from './components';

export const LearningProgram = () => {
  const [learningProgram, setLearningProgram] = useState(firstPartOfProgram);
  const [isOpenProgram, setIsOpenProgram] = useState(false);

  const handleToggleProgram = () => {
    if (isOpenProgram) {
      setIsOpenProgram(!isOpenProgram);
      setLearningProgram(firstPartOfProgram);
    } else {
      setIsOpenProgram(true);
      setLearningProgram((prevState) => prevState.concat(secondPartOfProgram));
    }
  };

  return (
    <S.Section id={'program'}>
      <Container>
        <S.Title>Программа обучения</S.Title>
        {learningProgram.map(
          ({
            courseFeatures,
            levelDescription,
            projectDescription,
            quarter,
            levelTitle,
            backgroundFlash,
          }) => {
            return (
              <S.Level
                key={levelTitle}
                layout={PRESERVE}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
              >
                {backgroundFlash && (
                  <S.BackgroundFlash
                    color={backgroundFlash.color}
                    position={backgroundFlash.position}
                  />
                )}

                <S.LevelQuarter layout={PRESERVE}>{quarter}</S.LevelQuarter>

                <S.LevelWrapper layout={PRESERVE}>
                  <S.LevelInfoWrapper layout={PRESERVE}>
                    <S.LevelTitle layout={PRESERVE}>{levelTitle}</S.LevelTitle>

                    <S.LevelDescription layout={PRESERVE}>
                      {levelDescription}
                    </S.LevelDescription>

                    <S.LevelProjectTitle layout={PRESERVE}>
                      Проект
                    </S.LevelProjectTitle>

                    <S.LevelProjectDescription layout={PRESERVE}>
                      {projectDescription}
                    </S.LevelProjectDescription>
                  </S.LevelInfoWrapper>

                  <S.CourseWrapper layout={PRESERVE}>
                    <S.CourseTitle layout={PRESERVE}>Курсы</S.CourseTitle>
                    <Accordion courseFeatures={courseFeatures} />
                  </S.CourseWrapper>
                </S.LevelWrapper>
              </S.Level>
            );
          },
        )}
        <S.ButtonWrapper>
          <S.LearningButton onClick={handleToggleProgram}>
            {isOpenProgram ? 'Скрыть программу' : ' Открыть всю программу'}
          </S.LearningButton>
        </S.ButtonWrapper>
      </Container>
    </S.Section>
  );
};
