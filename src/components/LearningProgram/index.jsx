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
  const [isOpenDescription, setIsOpenDescription] = useState(0);

  const handleToggleProgram = () => {
    if (isOpenProgram) {
      setIsOpenProgram(!isOpenProgram);
      setLearningProgram(firstPartOfProgram);
    } else {
      setIsOpenProgram(true);
      setLearningProgram((prevState) => prevState.concat(secondPartOfProgram));
    }
  };
  const handleToggleDescription = (id) => {
    setIsOpenDescription(id);
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
              <S.Level key={levelTitle} layout="preserve">
                <S.LevelQuarter layout="preserve">{quarter}</S.LevelQuarter>

                <S.LevelWrapper layout="preserve">
                  <S.LevelInfoWrapper layout="preserve">
                    <S.LevelTitle layout="preserve">{levelTitle}</S.LevelTitle>

                    <S.LevelDescription layout="preserve">
                      {levelDescription}
                    </S.LevelDescription>

                    <S.LevelProjectTitle layout="preserve">Проект</S.LevelProjectTitle>

                    <S.LevelProjectDescription layout="preserve">
                      {projectDescription}
                    </S.LevelProjectDescription>
                  </S.LevelInfoWrapper>

                  <S.CourseWrapper layout="preserve">
                    <S.CourseTitle layout="preserve">Курсы</S.CourseTitle>
                    {courseFeatures.map(({ featureTitle, featureDescription, id }) => {
                      const openDescription = isOpenDescription === id;
                      return (
                        <S.CourseFeatureWrapper key={featureTitle} layout="preserve">
                          <S.FeatureTitleWrapper layout="preserve">
                            <S.CourseFeatureTitle layout="preserve">
                              {featureTitle}
                            </S.CourseFeatureTitle>

                            {featureDescription && (
                              <S.CourseCross
                                layout="preserve"
                                onClick={() => handleToggleDescription(id)}
                              />
                            )}
                          </S.FeatureTitleWrapper>

                          {openDescription && (
                            <S.CourseFeatureDescription
                              layout="preserve"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 1 }}
                            >
                              {featureDescription}
                            </S.CourseFeatureDescription>
                          )}
                        </S.CourseFeatureWrapper>
                      );
                    })}
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
      </S.Section>
    </Container>
  );
};
