import { Container } from '@/components/Container';
import { learningProgramConfig } from '@/components/LearningProgram/config';

import * as S from './components';

export const LearningProgram = () => {
  return (
    <Container>
      <S.Section>
        <S.Title>Программа обучения</S.Title>
        {learningProgramConfig.map(
          ({
            courseFeatures,
            levelDescription,
            projectDescription,
            quarter,
            levelTitle,
          }) => {
            return (
              <S.Level>
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
                    {courseFeatures.map(({ featureTitle }) => (
                      <S.LevelCourseFeatureTitle>
                        {featureTitle}
                      </S.LevelCourseFeatureTitle>
                    ))}
                  </S.LevelCourseWrapper>
                </S.LevelWrapper>
              </S.Level>
            );
          },
        )}
      </S.Section>
    </Container>
  );
};
