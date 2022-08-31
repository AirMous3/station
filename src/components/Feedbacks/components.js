import styled from 'styled-components';

import { ArticleTitle } from '@/components/Devops/components';

export const Wrapper = styled.div`
  font-family: Generator;
  color: ${({ theme }) => theme.colors.text.main};
`;

export const Article = styled(ArticleTitle)``;

export const FeedbacksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  gap: 50px;
`;

export const Quotes = styled.div`
  font-weight: 900;
  font-size: ${({ theme }) => theme.typography.size[16]};
`;

export const FeedbackDescription = styled.div`
  font-family: Roboto;
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: ${({ theme }) => theme.colors.text.lightGrey};
  max-width: 696px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  gap: 35px;
`;

export const AvatarsWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const Avatar = styled.div`
  width: 81px;
  height: 81px;
  border-radius: 50%;
  border: 1px solid red;
`;
