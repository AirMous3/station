import { motion, useScroll, useTransform } from 'framer-motion';

import mainImage2 from '@/assets/icons/mainImage2.png';
import mainImage from '@/assets/icons/mainImage.png';
import { Container } from '@/components/Container';
import {
  INITIAL_DEVOPS_ROTATE_POSITION,
  INITIAL_DEVOPS_X_POSITION,
  INITIAL_DEVOPS_Y_POSITION,
  INITIAL_PROGRAM_ROTATE_POSITION,
  INITIAL_PROGRAM_Y_POSITION,
} from '@/components/Main/constants';

import * as S from './components';

export const Main = () => {
  const { scrollY } = useScroll();

  const devopsX = useTransform(
    scrollY,
    (value) => (value + INITIAL_DEVOPS_X_POSITION * 2) / 2,
  );
  const devopsY = useTransform(
    scrollY,
    (value) => (value + INITIAL_DEVOPS_Y_POSITION * 2) / 2,
  );
  const programX = useTransform(scrollY, (value) => value / -2);
  const programY = useTransform(
    scrollY,
    (value) => (value - INITIAL_PROGRAM_Y_POSITION * 2) / -2,
  );
  return (
    <Container>
      <S.Section>
        <S.RevertDescription>
          Решайте реальные задачи, учитесь работать в команде и осваивайте самые
          актуальные DevOps практики и инструменты
        </S.RevertDescription>

        <S.ImageWrapper>
          <S.BackgroundFlash />
          <S.SecondBackgroundFlash />
          <S.DevopsTitle
            style={{ x: devopsX, y: devopsY }}
            initial={{
              y: INITIAL_DEVOPS_Y_POSITION,
              x: INITIAL_DEVOPS_X_POSITION,
              rotate: INITIAL_DEVOPS_ROTATE_POSITION,
            }}
          >
            devops
          </S.DevopsTitle>

          <S.ProgramTitle
            style={{ x: programX, y: programY }}
            initial={{
              y: INITIAL_PROGRAM_Y_POSITION,
              rotate: INITIAL_PROGRAM_ROTATE_POSITION,
            }}
          >
            program
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
