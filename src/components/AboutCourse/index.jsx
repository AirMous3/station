import { Button } from '@/components/Button';
import { CourseFeatures } from '@/components/CourseFeatures';
import { Levels } from '@/components/Levels';
import { Ticker } from '@/components/Ticker';

import * as S from './components';

export const AboutCourse = () => {
  return (
    <div>
      <S.Container>
        <S.Article>Кому подойдет курс</S.Article>

        <Levels />

        <div>
          <Button>Узнать подробнее</Button>
        </div>
      </S.Container>

      <Ticker />
      <Ticker direction={'left'} />

      <CourseFeatures />
    </div>
  );
};
