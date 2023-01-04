import CircleType from 'circletype';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

import mainImage2 from '@/assets/images/mainImage2.png';
import mainImage from '@/assets/images/mainImage.png';
import { Container } from '@/components/Container';
import { CurveText } from '@/components/CurveText';

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
export let INITIAL_DEVOPS_Y_POSITION = -1450;
export let INITIAL_DEVOPS_X_POSITION = 100;
export let INITIAL_DEVOPS_ROTATE_POSITION = 40;
export let INITIAL_PROGRAM_Y_POSITION = -1400;
export let INITIAL_PROGRAM_X_POSITION = -100;
export let INITIAL_PROGRAM_ROTATE_POSITION = 40;
export let WIDTH = 1980;
export let HEIGHT = 2260;
export let RADIUS = 930;

export const Main = () => {
  const scrollPosition = useScrollPosition();

  const offset = 64 + (scrollPosition / 5000) * 70;
  const reverseOffset = 65 - (scrollPosition / 5000) * 70;

  const isLaptop = useMediaQuery({ query: '(max-width: 650px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' });
  if (isLaptop) {
    INITIAL_DEVOPS_X_POSITION = 0;
    INITIAL_PROGRAM_X_POSITION = -200;
  }
  if (isMobile) {
    INITIAL_DEVOPS_Y_POSITION = -1450;
    INITIAL_DEVOPS_X_POSITION = 0;
    INITIAL_PROGRAM_Y_POSITION = -1400;
    INITIAL_PROGRAM_X_POSITION = -100;
    HEIGHT = 1830;
    WIDTH = 1630;
    RADIUS = 930;
  }

  const PROGRAM_TITLE_ANIMATION = {
    y: INITIAL_PROGRAM_Y_POSITION,
    x: INITIAL_PROGRAM_X_POSITION,
  };
  const DEVOPS_TITLE_ANIMATION = {
    y: INITIAL_DEVOPS_Y_POSITION,
    x: INITIAL_DEVOPS_X_POSITION,
  };
  useLayoutEffect(() => {
    new CircleType(document.getElementById('circle'));
  }, []);
  return (
    <S.Section>
      <S.MainContainer>
        <S.RevertDescription>
          Решайте реальные задачи, учитесь работать в команде и осваивайте самые
          актуальные DevOps практики и инструменты
        </S.RevertDescription>
        <S.ImageWrapper>
          <Link to="getStarted" smooth={true}>
            <S.Circle id={'circle'}>
              у з н а т ь у з н а т ь у з н а т ь у з н а т ь у з н а т ь у з н
              а т ь
            </S.Circle>
          </Link>
          <S.BackgroundFlash />

          <S.SecondBackgroundFlash />

          <S.DevopsTitle initial={DEVOPS_TITLE_ANIMATION}>
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

          <S.ProgramTitle initial={PROGRAM_TITLE_ANIMATION}>
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
      </S.MainContainer>
    </S.Section>
  );
};
