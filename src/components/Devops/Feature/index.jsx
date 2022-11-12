import * as S from './components';

export const Feature = ({
  number,
  description,
  title,
  maxWidth,
  textAlign,
}) => {
  return (
    <S.Wrapper>
      <S.Number textAlign={textAlign}>{number}</S.Number>
      <S.Title>{title}</S.Title>
      <S.Description maxWidth={maxWidth}>{description}</S.Description>
    </S.Wrapper>
  );
};
