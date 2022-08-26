import { Container } from '@/components/Container';

import * as S from './components';

export const Devops = () => {
  return (
    <S.Section>
      <S.TitleWrapper>
        <S.Title>DevOps</S.Title>
        <S.Description>
          инженеры контролируют все этапы создания продукта: от написания кода до релиза.
          Помогают отделам разработки и администрирования, синхронизируют их усилия и
          автоматизируют технические процессы. За последние годы спрос на этих
          специалистов вырос в несколько раз. Мы поможем стать DevOps-инженером с нуля и
          найдём вам работу.
        </S.Description>
        <S.BackgroundTitle>DevOps</S.BackgroundTitle>
      </S.TitleWrapper>
      <Container>123</Container>
    </S.Section>
  );
};
