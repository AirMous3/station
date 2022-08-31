import { Container } from '@/components/Container';

import * as S from './components';

export const Feedbacks = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Article>Что говорят наши ученики</S.Article>
        <S.FeedbacksWrapper>
          <S.DescriptionWrapper>
            <S.Quotes>“</S.Quotes>
            <S.FeedbackDescription>
              Понравилась подача информации – качественно проработанные материалы, всё
              понятно и актуально, без воды. Чувствуется, что преподаватель сам варится в
              этой сфере, а не просто читает по методичке. По окончании обучения продолжаю
              поддерживать с ментором связь, всегда даёт советы и поддерживает. Самым
              большим плюсом при обучении была практика на реальных кейсов. Информацию
              можно нагуглить и бесплатно, а вот практика – бесценна.
            </S.FeedbackDescription>
          </S.DescriptionWrapper>

          <S.AvatarsWrapper>
            <S.Avatar />
            <S.Avatar />
            <S.Avatar />
            <S.Avatar />
          </S.AvatarsWrapper>
        </S.FeedbacksWrapper>
      </Container>
    </S.Wrapper>
  );
};
