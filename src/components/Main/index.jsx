import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { Header } from '@/components/Header';

import * as S from './components';

const titleAnimation = {
  hidden: {
    opacity: 0,
    y: -300,
    x: 0,
  },
  visible: {
    opacity: 1,
    y: -100,
    x: 0,
    transition: {
      duration: 2.5,
    },
  },
};
const backgroundAnimation = {
  hidden: {
    opacity: 0,
    y: -70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 1,
    },
  },
};

const startInfoAnimation = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 100,
    transition: {
      ease: 'easeOut',
      duration: 1,
      delay: 1.5,
    },
  },
};

export const Main = () => {
  const { scrollY } = useScroll();
  const startInfoY = useTransform(scrollY, (value) => (value - 100) / -2);
  const titleY = useTransform(scrollY, (value) => (value + 100) / -2);
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const sectionStyle = {
    opacity: isInView ? opacity : 0,
  };

  return (
    <S.Section
      style={sectionStyle}
      variants={backgroundAnimation}
      initial={'hidden'}
      whileInView={'visible'}
      ref={ref}
    >
      <Header />

      <S.Wrapper>
        <S.StartWrapper variants={startInfoAnimation} style={{ y: startInfoY }}>
          <motion.div>Старт: 29 июля</motion.div>
          <motion.div>6 месяцев</motion.div>
          <motion.div>Занятия 3 дня в неделю</motion.div>
          <motion.div>Формат: онлайн</motion.div>
        </S.StartWrapper>

        <S.TitleWrapper style={{ y: titleY }}>
          <S.Title variants={titleAnimation} custom={0}>
            Devops
          </S.Title>
          <S.Title variants={titleAnimation} custom={0}>
            Program
          </S.Title>
        </S.TitleWrapper>
      </S.Wrapper>
    </S.Section>
  );
};
