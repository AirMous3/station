import styled from 'styled-components';

import { ArticleTitle } from '@/components/Devops/components';

export const Article = styled(ArticleTitle)``;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

export const TeamWrapper = styled.li`
  display: flex;
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding: 10px;
  border: ${({ active }) => (active ? '2.5px solid #fe6f5f' : 'none')};
  border-radius: 50%;
  cursor: pointer;

  &:after {
    position: absolute;
    display: ${({ active }) => (active ? 'inline-block' : 'none')};
    content: '';
    height: 2px;
    width: 100px;
    background: #fe6f5f;
    bottom: 50%;
    right: -68%;
  }

  img {
    filter: ${({ active }) => (active ? 'grayscale(0%)' : 'grayscale(100%)')};
    max-height: ${({ active }) => (active ? '143px' : '106px')};
  }
`;

export const AboutMentorWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 455px;
`;

export const MentorName = styled.div`
  font-weight: 900;
  font-size: ${({ theme }) => theme.typography.size[7]};
  color: ${({ theme }) => theme.colors.text.main};
`;

export const MentorDescription = styled.div`
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: ${({ theme }) => theme.colors.text.lightGrey};
`;

export const ImagesWrapper = styled.ul`
  margin-top: 85px;
  position: relative;
  padding-left: 100px;
`;

export const BackgroundFlash = styled.div`
  position: absolute;
  z-index: -1;
  width: 351.55px;
  height: 347.65px;
  left: 105px;
  top: -91px;
  background: linear-gradient(
        to bottom,
        rgba(23, 20, 20, 0.51),
        rgba(255, 255, 255, 0.51)
      )
      no-repeat border-box,
    linear-gradient(180deg, #006b8a 0%, #812a9f 100%) no-repeat border-box;

  background-origin: padding-box, padding-box;
  filter: blur(150px);
  transform: rotate(-1.4deg);
`;
/*linear-gradient( to bottom, rgba(0, 0, 0, 0.51), rgba(227, 227, 227, 0.51) ) no-repeat border-box, linear-gradient(180deg,#176880 0%,#671484 100%) no-repeat border-box;*/
