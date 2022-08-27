import { Button } from '@/components/Button';
import { Levels } from '@/components/Levels';

import * as S from './components';

export const AboutCourse = () => {
  return (
    <S.Wrapper>
      <S.Article>Кому подойдет курс</S.Article>
      <Levels />
      <Button>Узнать подробнее</Button>
    </S.Wrapper>
  );
};
