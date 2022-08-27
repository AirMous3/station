import { levelsConfig } from '@/components/Levels/config';

import * as S from './components';
import { ArrowButton } from './components';

export const Levels = () => {
  return (
    <S.Wrapper>
      {levelsConfig.map(({ number, title }) => (
        <S.LevelWrapper key={number}>
          <S.LevelNumber>{number}</S.LevelNumber>

          <S.TitleWrapper>
            <S.LevelTitle>{title}</S.LevelTitle>

            <ArrowButton />
          </S.TitleWrapper>
        </S.LevelWrapper>
      ))}
    </S.Wrapper>
  );
};
