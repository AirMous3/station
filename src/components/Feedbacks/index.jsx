import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useEffect, useState } from 'react';

import mentorImage from '@/assets/icons/miniMentorImage.png';
import { Container } from '@/components/Container';

import * as S from './components';

export const Feedbacks = () => {
  const [state] = useState([
    { id: 1, title: 'Игорь', description: 'Март 2022' },
    { id: 2, title: 'Игорь', description: 'Март 2022' },
    { id: 3, title: 'Игорь', description: 'Март 2022' },
    { id: 4, title: 'Игорь', description: 'Март 2022' },
  ]);

  const [activeId, setActiveId] = useState(1);

  const handleClick = (id) => {
    setActiveId(id);
  };

  useEffect(() => {
    let id = activeId;

    const intervalId = setInterval(() => {
      id === 4 ? (id = 1) : (id += 1);
      setActiveId(id);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeId]);

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
              <S.AvatarsWrapper>
                {state.map(({ id, description, title }) => {
                  const active = activeId === id;

                  return (
                    <S.AvatarWrapper
                      isActive={active}
                      key={id}
                      onClick={() => handleClick(id)}
                      layout="preserve"
                    >
                      <S.AvatarImage
                        layout="preserve"
                        src={mentorImage}
                        alt="mentorImage"
                        animate={active ? { x: 15 } : { x: 0 }}
                      />
                      <AnimatePresence>
                        {active && (
                          <S.AvatarDescriptionWrapper
                            layout="preserve"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, x: 25 }}
                            transition={{ duration: 0.1 }}
                          >
                            <S.AvatarTitle>{title}</S.AvatarTitle>
                            <S.AvatarDescription>{description}</S.AvatarDescription>
                          </S.AvatarDescriptionWrapper>
                        )}
                      </AnimatePresence>
                    </S.AvatarWrapper>
                  );
                })}
              </S.AvatarsWrapper>
            </S.FeedbackDescription>
          </S.DescriptionWrapper>
        </S.FeedbacksWrapper>
      </Container>
    </S.Wrapper>
  );
};
