import { useMediaQuery } from 'react-responsive';

import * as S from './components';

export const StartInfoLine = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 505px)' });
  return (
    <S.Wrapper>
      <div>Старт: 29 июля</div>
      <div>6 месяцев</div>
      <div>Занятия 3 дня в неделю</div>
      <div>{!isMobile && 'Формат:'} онлайн</div>
    </S.Wrapper>
  );
};
