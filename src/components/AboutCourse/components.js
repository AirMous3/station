import styled from 'styled-components';

import { ArticleTitle } from '@/components/Devops/components';

export const Article = styled(ArticleTitle)`
  font-size: ${({ theme }) => theme.typography.size[11]};
  margin-left: auto;
  text-align: end;
`;
export const Container = styled.div`
  padding: 0 50px;
  margin-bottom: 165px;
`;
