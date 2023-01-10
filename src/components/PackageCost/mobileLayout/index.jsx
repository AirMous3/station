import { Container } from '@/components/Container';
import { englishConfig } from '@/components/PackageCost/config';

import * as S from './components';

export const PackageCostFeaturesMobileLayout = () => {
  return (
    <Container>
      <S.Wrapper>
        <S.EnglishTitleML>Почему английский нужен в IT</S.EnglishTitleML>

        {englishConfig.map(
          ({ description, title, number, numberColor, titleColor, top }) => (
            <S.EnglishFeatureML key={title}>
              <S.EnglishFeatureTitleML color={titleColor}>
                {title}
              </S.EnglishFeatureTitleML>

              <S.EnglishFeatureDescriptionML
                dangerouslySetInnerHTML={{ __html: description }}
              />

              <S.EnglishFeatureNumberML color={numberColor} top={top}>
                {number}
              </S.EnglishFeatureNumberML>
            </S.EnglishFeatureML>
          ),
        )}

        <S.EnglishButtonML>Купить пакеты с английским</S.EnglishButtonML>

        <S.BackgroundFlashML />
      </S.Wrapper>
    </Container>
  );
};
