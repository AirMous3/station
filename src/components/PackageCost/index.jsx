import { useContext } from 'react';

import { Container } from '@/components/Container';
import { englishConfig, packageConfig } from '@/components/PackageCost/config';
import { ModalContext } from '@/context/ModalContext';

import * as S from './components';

export const PackageCost = () => {
  const { setVisible } = useContext(ModalContext);
  return (
    <S.Section id={'packages'}>
      <Container>
        <S.Article>Пакеты обучения</S.Article>
      </Container>
      <S.PackagesWrapper>
        {packageConfig.map(({ title, features, style }, index) => (
          <S.PackageWrapper key={index} style={style}>
            <div>
              <S.PackageTitle>{title}</S.PackageTitle>
              {features.map((feature, index) => (
                <S.PackageFeature key={index}>{feature}</S.PackageFeature>
              ))}
            </div>

            <div>
              <S.PackagePrice>От 2200 BYN</S.PackagePrice>
              <S.PackageButton onClick={() => setVisible(true)}>
                Записаться
              </S.PackageButton>
            </div>
          </S.PackageWrapper>
        ))}
      </S.PackagesWrapper>

      <Container>
        <S.EnglishWrapper>
          <S.EnglishTitleWrapper>
            <S.EnglishTitle>Почему английский нужен в IT</S.EnglishTitle>
          </S.EnglishTitleWrapper>

          {englishConfig.map(
            ({ description, title, number, numberColor, titleColor, top }) => (
              <S.EnglishFeature key={title}>
                <S.EnglishFeatureTitle color={titleColor}>
                  {title}
                </S.EnglishFeatureTitle>

                <S.EnglishFeatureDescription
                  dangerouslySetInnerHTML={{ __html: description }}
                />

                <S.EnglishFeatureNumber color={numberColor} top={top}>
                  {number}
                </S.EnglishFeatureNumber>
              </S.EnglishFeature>
            ),
          )}

          <S.EnglishButton>Купить пакеты с английским</S.EnglishButton>

          <S.BackgroundFlash />
        </S.EnglishWrapper>
      </Container>
    </S.Section>
  );
};
