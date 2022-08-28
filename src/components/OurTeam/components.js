import styled from 'styled-components';

import { ArticleTitle } from '@/components/Devops/components';

export const Article = styled(ArticleTitle)``;

export const Wrapper = styled.div`
  font-family: Roboto;
  display: flex;
  margin-top: 80px;
`;

export const TeamWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-left: 70px;
`;
export const ImageWrapper = styled.li`
  position: relative;
  padding: 10px;
  border: ${({ active }) => (active ? '2.5px solid #fe6f5f' : 'none')};
  border-radius: 50%;

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
    max-width: ${({ active }) => (active ? '143px' : '106px')};
    max-height: ${({ active }) => (active ? '143px' : '106px')};
  }
`;

export const AboutMentorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 120px;
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
