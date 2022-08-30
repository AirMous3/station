import styled from 'styled-components';

import { ArticleTitle } from '@/components/Devops/components';

export const Section = styled.section`
  font-family: Roboto;
  color: ${({ theme }) => theme.colors.text.main};
  margin-top: 100px;
  text-align: center;
  padding: 0 60px;
  margin-bottom: 150px;
`;

export const Article = styled(ArticleTitle)``;

export const PackagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 80px;
`;

export const PackageWrapper = styled.div`
  width: 25%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 34px 0;
`;

export const PackageTitle = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[8]};
  text-transform: uppercase;
`;

export const PackageFeature = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size[1]};
  border-bottom: 1px solid blueviolet;
  border-bottom: 2px solid transparent;
  //TODO
  border-image: radial-gradient(
    95.57% 71934453762.28% at 98.02% 1777544.28%,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 52.18%,
    rgba(255, 255, 255, 0) 100%
  );
  border-image-slice: 1;
  width: 100%;
  padding-bottom: 20px;
`;

export const PackagePrice = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[9]};
`;
