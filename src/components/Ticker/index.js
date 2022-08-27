import Marquee from 'react-double-marquee';

import * as S from './components';

export const Ticker = ({ direction }) => {
  return (
    <S.Wrapper>
      <Marquee speed={0.05} direction={direction}>
        Станьте DevOps-инженером с нуля
      </Marquee>
    </S.Wrapper>
  );
};
