import { useState } from 'react';

import { mentorConfig, teamImages } from '@/components/OurTeam/config';

import * as S from './components';

export const OurTeam = () => {
  const [isOpen, setIsOpen] = useState(1);

  const handleClick = (id) => {
    setIsOpen(id);
  };
  return (
    <S.Section>
        <S.Article>Наша команда</S.Article>

        <S.ImagesWrapper>
          {teamImages.map(({ imageId, image }) => {
            let active = imageId === isOpen;
            return (
              <S.TeamWrapper key={imageId}>
                <S.ImageWrapper active={active} onClick={() => handleClick(imageId)}>
                  <img src={image} alt="teamImage" />
                </S.ImageWrapper>

                {active &&
                  mentorConfig.map(({ fullImage, name, description, mentorId }) => {
                    if (mentorId !== imageId) return;
                    return (
                      <S.AboutMentorWrapper key={mentorId}>
                        <img src={fullImage} alt="mentorImage" />
                        <S.MentorName>{name}</S.MentorName>
                        <S.MentorDescription>{description}</S.MentorDescription>
                      </S.AboutMentorWrapper>
                    );
                  })}
              </S.TeamWrapper>
            );
          })}
        </S.ImagesWrapper>
    </S.Section>
  );
};
