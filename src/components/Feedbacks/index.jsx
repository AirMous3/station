import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import mentorImage from '@/assets/images/miniMentorImage.png';
import { Container } from '@/components/Container';
import { feedbackConfig } from '@/components/Feedbacks/config';
import { PRESERVE } from '@/constants/framer';

import * as S from './components';

export const Feedbacks = () => {
  const [activeId, setActiveId] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' });

  const handleClick = (id) => {
    setActiveId(id);
  };

  useEffect(() => {
    let id = activeId;

    const intervalId = setInterval(() => {
      id === 3 ? (id = 0) : (id += 1);
      setActiveId(id);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeId]);

  return (
    <S.Section id={'feedbacks'}>
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
                      layout={PRESERVE}
                    >
                      <S.AvatarImage
                        layout={PRESERVE}
                        src={mentorImage}
                        alt="mentorImage"
                        isActive={active}
                        animate={
                          isMobile
                            ? active
                              ? { x: 5 }
                              : { x: 0 }
                            : active
                            ? { x: 15 }
                            : { x: 0 }
                        }
                        transition={{
                          x: { type: 'spring', stiffness: 100 },
                          duration: 0.8,
                        }}
                      />

                      {active && (
                        <S.AvatarDescriptionWrapper
                          layout={PRESERVE}
                          initial={{ opacity: 0 }}
                          animate={
                            isMobile
                              ? { opacity: 1, x: 0 }
                              : { opacity: 1, x: 25 }
                          }
                          transition={{ duration: 0.1 }}
                        >
                          <S.AvatarTitle>{title}</S.AvatarTitle>
                          <S.AvatarDescription>
                            {description}
                          </S.AvatarDescription>
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
    </S.Section>
  );
};
