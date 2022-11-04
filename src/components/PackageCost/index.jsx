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

      <Container>
        <S.EnglishWrapper>
          <S.EnglishTitleWrapper>
            <S.EnglishTitle>Почему английский нужен в IT</S.EnglishTitle>
          </S.EnglishTitleWrapper>

          {englishConfig.map(({ description, title }) => (
            <S.EnglishFeature key={title}>
              <S.EnglishFeatureTitle>{title}</S.EnglishFeatureTitle>
              <S.EnglishFeatureDescription>{description}</S.EnglishFeatureDescription>
            </S.EnglishFeature>
          ))}

          <S.EnglishButton>Купить пакеты с английским</S.EnglishButton>
        </S.EnglishWrapper>
      </Container>
    </S.Section>
  );
};
