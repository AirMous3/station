import * as S from './components';

export const Feature = ({ number, description, title }) => {
  return (
    <S.Wrapper>
      <S.Number>{number}</S.Number>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
};
