import { HIDDEN, VISIBLE } from '@/constants/framer';

import * as S from './components';

export const Feature = ({
  number,
  description,
  title,
  maxWidth,
  textAlign,
  custom,
}) => {
  const featureAnimation = {
    hidden: {
      opacity: 0,
      y: 180,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.5,
        duration: 1,
      },
    }),
  };
  return (
    <S.Wrapper
      initial={HIDDEN}
      whileInView={VISIBLE}
      viewport={{ once: true }}
      variants={featureAnimation}
      custom={custom}
    >
      <S.Number textAlign={textAlign}>{number}</S.Number>
      <S.Title>{title}</S.Title>
      <S.Description maxWidth={maxWidth}>{description}</S.Description>
    </S.Wrapper>
  );
};
