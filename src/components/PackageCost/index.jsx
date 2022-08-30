import { Container } from '@/components/Container';
import { packageConfig } from '@/components/PackageCost/config';

import * as S from './components';

export const PackageCost = () => {
  return (
    <S.Section>
      <Container>
        <S.Article>Пакеты обучения</S.Article>
      </Container>

      <S.PackagesWrapper>
        {packageConfig.map(({ title, features }) => (
          <S.PackageWrapper>
            <S.PackageTitle>{title}</S.PackageTitle>
            {features.map((feature) => (
              <S.PackageFeature>{feature}</S.PackageFeature>
            ))}
            <S.PackagePrice>От 2200 BYN</S.PackagePrice>
          </S.PackageWrapper>
        ))}
      </S.PackagesWrapper>
    </S.Section>
  );
};
