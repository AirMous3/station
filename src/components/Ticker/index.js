import Marquee from 'react-fast-marquee';

import * as S from './components';

export const Ticker = ({ direction }) => {
  return (
    <S.Wrapper>
      <Marquee direction={direction} gradient={false} play={true}>
        Станьте DevOps-инженером с нуля
      </Marquee>
    </S.Wrapper>
  );
};
