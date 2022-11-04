import { useState } from 'react';

import { Container } from '@/components/Container';
import {
  firstPartOfProgram,
  secondPartOfProgram,
} from '@/components/LearningProgram/config';

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
    <Container>
      <S.Section>
        <S.Title>Программа обучения</S.Title>
        {learningProgram.map(
          ({
            courseFeatures,
            levelDescription,
            projectDescription,
            quarter,
            levelTitle,
          }) => {
            return (
              <S.Level key={levelTitle}>
                <S.LevelQuarter>{quarter}</S.LevelQuarter>

                <S.LevelWrapper>
                  <S.LevelInfoWrapper>
                    <S.LevelTitle>{levelTitle}</S.LevelTitle>

                    <S.LevelDescription>{levelDescription}</S.LevelDescription>

                    <S.LevelProjectTitle>Проект</S.LevelProjectTitle>

                    <S.LevelProjectDescription>
                      {projectDescription}
                    </S.LevelProjectDescription>
                  </S.LevelInfoWrapper>

                  <S.LevelCourseWrapper>
                    <S.LevelCourseTitle>Курсы</S.LevelCourseTitle>
                    {courseFeatures.map(({ featureTitle, featureDescription }) => (
                      <S.LevelCourseFeatureWrapper>
                        <S.LevelCourseFeatureTitle>
                          {featureTitle}
                        </S.LevelCourseFeatureTitle>

                        {featureDescription && <S.LevelCourseCross />}
                      </S.LevelCourseFeatureWrapper>
                    ))}
                  </S.LevelCourseWrapper>
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
      </S.Section>
    </Container>
  );
};
