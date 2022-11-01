import CircleType from 'circletype';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-scroll';

import mainImage2 from '@/assets/icons/mainImage2.png';
import mainImage from '@/assets/icons/mainImage.png';
import { Container } from '@/components/Container';
import { CurveText } from '@/components/CurveText';
import {
  HEIGHT,
  INITIAL_DEVOPS_X_POSITION,
  INITIAL_DEVOPS_Y_POSITION,
  INITIAL_PROGRAM_X_POSITION,
  INITIAL_PROGRAM_Y_POSITION,
  RADIUS,
  WIDTH,
} from '@/components/Main/constants';

import * as S from './components';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};
export const Main = () => {
  const scrollPosition = useScrollPosition();

  const offset = 64 + (scrollPosition / 4000) * 70;
  const reverseOffset = 65 - (scrollPosition / 4000) * 70;

  useLayoutEffect(() => {
    new CircleType(document.getElementById('circle'));
  }, []);
  return (
    <Container>
      <S.Section>
        <S.RevertDescription>
          Решайте реальные задачи, учитесь работать в команде и осваивайте самые
          актуальные DevOps практики и инструменты
        </S.RevertDescription>
        <S.ImageWrapper>
          <Link to="getStarted" smooth={true}>
            <S.Circle id={'circle'}>
              у з н а т ь у з н а т ь у з н а т ь у з н а т ь у з н а т ь у з н а т ь
            </S.Circle>
          </Link>
          <S.BackgroundFlash />

          <S.SecondBackgroundFlash />

          <S.DevopsTitle
            initial={{
              y: INITIAL_DEVOPS_Y_POSITION,
              x: INITIAL_DEVOPS_X_POSITION,
            }}
          >
            <CurveText
              id={1}
              width={WIDTH}
              height={HEIGHT}
              radius={RADIUS}
              reverse={true}
              offset={`${offset}%`}
            >
              devops
            </CurveText>
          </S.DevopsTitle>

          <S.ProgramTitle
            initial={{
              y: INITIAL_PROGRAM_Y_POSITION,
              x: INITIAL_PROGRAM_X_POSITION,
            }}
          >
            <CurveText
              id={2}
              width={WIDTH}
              height={HEIGHT}
              radius={RADIUS}
              reverse={true}
              offset={`${reverseOffset}%`}
            >
              program
            </CurveText>
          </S.ProgramTitle>

          <S.FirstImage src={mainImage} alt="mainImage" />
          <S.SecondMainImage src={mainImage2} alt="mainImage" />
        </S.ImageWrapper>

        <S.Description>
          Решайте реальные задачи, учитесь работать в команде и осваивайте самые
          актуальные DevOps практики и инструменты
        </S.Description>
      </S.Section>
    </Container>
  );
};
