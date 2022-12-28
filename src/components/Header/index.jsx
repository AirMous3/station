import { Link } from 'react-scroll';

import logo from '@/assets/images/logo.png';

import * as S from './components';

export const Header = () => {
  return (
    <S.Header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <S.Navbar>
        <Link to="getStarted" smooth={true}>
          <S.NavItem>Обучение</S.NavItem>
        </Link>
        <Link to="program" smooth={true}>
          <S.NavItem>Программа</S.NavItem>
        </Link>
        <Link to="packages" smooth={true}>
          <S.NavItem>Пакеты</S.NavItem>
        </Link>
        <Link to="feedbacks" smooth={true}>
          <S.NavItem>Отзывы</S.NavItem>
        </Link>
      </S.Navbar>
      <S.Button>Записаться на курс</S.Button>
    </S.Header>
  );
};
