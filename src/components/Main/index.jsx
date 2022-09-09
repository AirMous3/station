import mainImage2 from '@/assets/icons/mainImage2.png';
import mainImage from '@/assets/icons/mainImage.png';
import { Container } from '@/components/Container';

import * as S from './components';

export const Main = () => {
  return (
    <Container>
      <S.Section>
        <S.RevertDescription>
          Решайте реальные задачи, учитесь работать в команде и осваивайте самые
          актуальные DevOps практики и инструменты
        </S.RevertDescription>

        <S.ImageWrapper>
          <S.Title> Devops Program</S.Title>
          <S.FirstImage src={mainImage} alt="mainImage" />
          <S.SecondMainImage src={mainImage2} alt="mainImage" />
        </S.ImageWrapper>

        <S.Description>
          Решайте реальные задачи, учитесь работать в команде и осваивайте самые
          актуальные DevOps практики и инструменты
        </S.Description>
      </S.Section>
    </Container>
  );
};
