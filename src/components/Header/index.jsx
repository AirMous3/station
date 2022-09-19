import logo from '@/assets/icons/logo.png';

import * as S from './components';

const logoAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      delay: 2,
    },
  },
};
export const Header = () => {
  return (
    <S.Header>
      <S.Logo
        initial="hidden"
        animate="visible"
        variants={logoAnimation}
        src={logo}
        alt="logo"
      />
    </S.Header>
  );
};
