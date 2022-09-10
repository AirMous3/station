import { useState } from 'react';

import { Container } from '@/components/Container';
import { mentorConfig } from '@/components/OurTeam/config';

import * as S from './components';

export const OurTeam = () => {
  const [isOpen, setIsOpen] = useState(1);

  const handleClick = (id) => {
    setIsOpen(id);
  };
  return (
    <S.Section>
      <Container>
          <S.Article>Наша команда</S.Article>

          <S.ImagesWrapper>
            {mentorConfig.map(({ image, mentorId, name, description, fullImage }) => {
              let active = mentorId === isOpen;
              return (
                <S.TeamWrapper key={mentorId}>
                  <S.ImageWrapper active={active} onClick={() => handleClick(mentorId)}>
                    <img src={image} alt="teamImage" />
                  </S.ImageWrapper>

                  {active && (
                    <S.AboutMentorWrapper key={mentorId}>
                      <img src={fullImage} alt="mentorImage" />
                      <S.MentorName>{name}</S.MentorName>
                      <S.MentorDescription>{description}</S.MentorDescription>
                    </S.AboutMentorWrapper>
                  )}
                </S.TeamWrapper>
              );
            })}
          </S.ImagesWrapper>
      </Container>
    </S.Section>
  );
};
