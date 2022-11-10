import { useState } from 'react';

import { Container } from '@/components/Container';
import { Accordion } from '@/components/LearningProgram/Accordion';
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
      </S.Section>
    </Container>
  );
};
