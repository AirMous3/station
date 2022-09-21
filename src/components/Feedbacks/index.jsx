import { useEffect, useState } from 'react';

import mentorImage from '@/assets/icons/miniMentorImage.png';
import { Container } from '@/components/Container';
import { feedbackConfig } from '@/components/Feedbacks/config';

import * as S from './components';

export const Feedbacks = () => {
  const [activeId, setActiveId] = useState(0);

  const handleClick = (id) => {
    setActiveId(id);
  };

  useEffect(() => {
    let id = activeId;

    const intervalId = setInterval(() => {
      id === 3 ? (id = 0) : (id += 1);
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
            <S.FeedbackDescriptionWrapper>
              <S.FeedbackDescription>
                {feedbackConfig[activeId].feedback}
              </S.FeedbackDescription>

              <S.AvatarsWrapper>
                {feedbackConfig.map(({ id, description, title }, index) => {
                  const active = activeId === index;

                  return (
                    <S.AvatarWrapper
                      isActive={active}
                      key={index}
                      onClick={() => handleClick(index)}
                      layout="preserve"
                    >
                      <S.AvatarImage
                        layout="preserve"
                        src={mentorImage}
                        alt="mentorImage"
                        animate={active ? { x: 15 } : { x: 0 }}
                      />

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
                    </S.AvatarWrapper>
                  );
                })}
              </S.AvatarsWrapper>
            </S.FeedbackDescriptionWrapper>
          </S.DescriptionWrapper>
        </S.FeedbacksWrapper>
      </Container>
    </S.Wrapper>
  );
};
