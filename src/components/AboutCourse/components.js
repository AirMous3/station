import styled from 'styled-components';

import { ArticleTitle } from '@/components/Devops/components';

export const Section = styled.section``;
export const Article = styled(ArticleTitle)`
  font-size: ${({ theme }) => theme.typography.size[11]};
  margin-left: auto;
  text-align: end;

  @media (max-width: 1000px) {
    font-size: 50px;
  }
  @media (max-width: 800px) {
    font-size: 40px;
  }
  @media (max-width: 450px) {
    font-size: 30px;
  }
`;
export const Container = styled.div`
  padding: 0 50px;
  margin-bottom: 165px;

  @media (max-width: 1000px) {
    padding: 0 20px;
  }
`;
