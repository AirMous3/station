import { useState } from 'react';

import { levelsConfig } from '../Levels/config';
import * as S from './components';
import { ArrowButton } from './components';

export const Levels = () => {
  const [isOpenDescription, setIsOpenDescription] = useState();

  const handleClick = (id) => {
    setIsOpenDescription(id);
  };
  return (
    <S.Wrapper>
      {levelsConfig.map(({ number, title, description }) => {
        let active = isOpenDescription === number;
        return (
          <S.LevelsWrapper key={number} layout>
            <S.LevelNumber layout="preserve">{number}</S.LevelNumber>

            <S.LevelWrapper active={active}>
              <S.LevelTitle layout="preserve">{title}</S.LevelTitle>
              {active && (
                <S.LevelDescription
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  {description}
                </S.LevelDescription>
              )}

              <ArrowButton
                active={active}
                onClick={() => handleClick(number)}
              />
            </S.LevelWrapper>
          </S.LevelsWrapper>
        );
      })}
    </S.Wrapper>
  );
};
