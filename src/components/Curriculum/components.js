import styled from 'styled-components';

import { ArticleTitle } from '@/components/Devops/components';

export const Section = styled.section`
  margin-top: 170px;
  font-family: Roboto;
`;

export const Article = styled(ArticleTitle)`
  max-width: 450px;
  margin-bottom: 70px;
`;

export const Features = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 150px;
`;

export const Circle = styled.div`
  position: relative;
  width: 588px;
  height: 588px;
  border-radius: 50%;
  margin-left: -13%;
  background: ${({ theme }) => theme.colors.background.body};

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    //  TODO
    background: linear-gradient(326.78deg, #fe6f5f 11.13%, rgba(0, 0, 0, 0) 73.02%);
    border-radius: 50%;
    z-index: -1;
  }
`;

export const FeaturesWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 45px;
  margin-top: 30px;
`;

export const FeatureNumber = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[9]};
  color: ${({ theme }) => theme.colors.text.main};
  //  TODO
  background: linear-gradient(180deg, #4f4f4f 0%, #a7a7a7 100%);
  min-width: 55px;
  min-height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px 8px rgba(176, 173, 184, 0.2);
`;

export const FeatureWrapper = styled.li`
  display: flex;
  gap: 25px;
  align-items: center;
  z-index: 2;
  margin-left: ${({ margin }) => margin};

  &:hover {
    ${FeatureNumber} {
      //  TODO
      background: linear-gradient(180deg, #2037fb 0%, #50dadd 100%);
      box-shadow: 0px 0px 20px 8px rgba(100, 212, 244, 0.2);
    }
  }
`;

export const FeatureTitle = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: ${({ theme }) => theme.colors.text.lightGrey};
`;
