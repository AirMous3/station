import image from '@/assets/icons/mentorImage.png';
import { Container } from '@/components/Container';
import { ourTeamConfig } from '@/components/OurTeam/config';

import * as S from './components';

export const OurTeam = () => {
  return (
    <section>
      <Container>
        <S.Article>Наша команда</S.Article>
        <S.Wrapper>
          <S.TeamWrapper>
            {ourTeamConfig.map(({ image, active }, index) => (
              <S.ImageWrapper active={active} key={index}>
                <img src={image} alt="teamImage" />
              </S.ImageWrapper>
            ))}
          </S.TeamWrapper>

          <S.AboutMentorWrapper>
            <img src={image} alt="mentorImage" />
            <S.MentorName>Алексей</S.MentorName>
            <S.MentorDescription>Краткая инфа о преподе</S.MentorDescription>
          </S.AboutMentorWrapper>
        </S.Wrapper>
      </Container>
    </section>
  );
};
