import logo from '@/assets/icons/logo.png';

import * as S from './components';

export const Footer = () => {
  return (
    <S.Section>
      <S.Communication>
        <div>
          <S.Logo src={logo} />

          <S.ContactsWrapper>
            <S.ContactsDataWrapper>
              <div>+375 29 000 00 00</div>
              <div>нашапочта@gmail.com</div>
            </S.ContactsDataWrapper>

            <S.IconsWrapper>
              <S.Icon />
              <S.TgIcon />
            </S.IconsWrapper>
          </S.ContactsWrapper>
        </div>

        <S.FeaturesWrapper>
          <S.FeaturesDataWrapper>
            <S.Feature>О курсе</S.Feature>
            <S.Feature> Как проходит обучение</S.Feature>
            <S.Feature> Наша команда</S.Feature>
          </S.FeaturesDataWrapper>

          <S.FeaturesDataWrapper>
            <S.Feature>Программа обучения</S.Feature>
            <S.Feature> Пакеты обучения</S.Feature>
            <S.Feature> Отзывы</S.Feature>
          </S.FeaturesDataWrapper>
        </S.FeaturesWrapper>
      </S.Communication>

      <S.Rights>© 2022 Все права защищены.</S.Rights>
    </S.Section>
  );
};
