import { Container } from '@/components/Container';
import { englishConfig, packageConfig } from '@/components/PackageCost/config';

import * as S from './components';

export const PackageCost = () => {
  return (
    <S.Section>
      <Container>
        <S.Article>Пакеты обучения</S.Article>
      </Container>

      <S.PackagesWrapper>
        {packageConfig.map(({ title, features }, index) => (
          <S.PackageWrapper key={index}>
            <S.PackageTitle>{title}</S.PackageTitle>
            {features.map((feature, index) => (
              <S.PackageFeature key={index}>{feature}</S.PackageFeature>
            ))}
            <S.PackagePrice>От 2200 BYN</S.PackagePrice>
          </S.PackageWrapper>
        ))}
      </S.PackagesWrapper>

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
    </S.Section>
  );
};
