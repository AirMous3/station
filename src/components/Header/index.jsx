import logo from '@/assets/images/logo.png';

import * as S from './components';

export const Header = () => {
  return (
    <S.Header>
      <img src={logo} alt="logo" />
    </S.Header>
  );
};
