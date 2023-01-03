import image from '@/assets/images/getStartedImage.png';
import { ApplicationForm } from '@/components/ApplicationForm';
import { Container } from '@/components/Container';

import * as S from './components';

export const GetStarted = () => {
  return (
    <S.Section>
      <Container>
        <S.Wrapper>
          <S.Article id="getStarted">Измени свою жизнь уже сейчас</S.Article>

          <S.BackgroundFlash />

          <S.Image src={image} alt="backImage" />

          <ApplicationForm />
        </S.Wrapper>
      </Container>
    </S.Section>
  );
};
