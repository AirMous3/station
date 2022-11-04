import * as S from './components';

export const Button = ({ children, className }) => {
  return <S.ButtonWrapper className={className}>{children}</S.ButtonWrapper>;
};
