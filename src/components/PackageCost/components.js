import styled from 'styled-components/macro';

import arrow from '@/assets/icons/englishArrow.svg';
import { Button } from '@/components/Button';
import { ArticleTitle } from '@/components/Devops/components';

export const Section = styled.section`
  color: ${({ theme }) => theme.colors.text.main};
  margin-top: 100px;
  margin-bottom: 150px;
`;

export const Article = styled(ArticleTitle)``;

export const PackagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 80px;
  text-align: center;
  margin-bottom: 156px;
`;

export const PackageWrapper = styled.ul`
  width: 25%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 34px 0;
`;

export const PackageTitle = styled.h3`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[8]};
  text-transform: uppercase;
`;

export const PackageFeature = styled.li`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size[1]};
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

export const EnglishWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const EnglishTitleWrapper = styled.div`
  display: flex;
  width: 50%;
  padding-right: 30px;
  padding-bottom: 10px;
  box-sizing: border-box;
  border-bottom: 2px solid #535353;
  border-right: 2px solid #535353;
`;

export const EnglishTitle = styled.div`
  display: flex;
  align-items: center;
  font-family: 'NAMU';
  font-weight: 700;
  font-size: 50px;
  color: #ffffff;
  line-height: 90%;

  &::after {
    content: '';
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 100%;
    max-width: 190px;
    height: 100%;
  }
  }
`;

export const EnglishFeature = styled.div`
  position: relative;
  width: 50%;
  padding-left: 30px;
  padding-bottom: 10px;
  box-sizing: border-box;

  &:nth-child(n + 3) {
    padding-top: 45px;
    padding-left: 0;
    padding-bottom: 30px;
  }

  &:nth-child(n + 4):nth-child(even) {
    padding-left: 30px;
  }

  &:nth-child(odd) {
    border-right: 2px solid #535353;
  }

  &:nth-child(-n + 4) {
    border-bottom: 2px solid #535353;
  }
`;

export const EnglishFeatureTitle = styled.div`
  font-weight: 500;
  font-size: 23px;
  line-height: 120%;
  color: ${({ color }) => color};
`;

export const EnglishFeatureDescription = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  color: #bcbcbc;
  max-width: 500px;
  margin-top: 6px;
  span {
    color: #ffffff;
  }
`;

export const EnglishButton = styled(Button)`
  max-width: 410px;
  padding-left: 48px;
  padding-right: 48px;
  margin-top: 91px;
  box-sizing: content-box;
`;

export const EnglishFeatureNumber = styled.div`
  position: absolute;
  top: ${({ top }) => top || '-18px'};
  right: 5px;
  font-family: 'NAMU';
  font-weight: 700;
  font-size: 150px;
  color: ${({ color }) => color};
  pointer-events: none;
`;

export const BackgroundFlash = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  top: 0;
  right: 250px;
  background: linear-gradient(180deg, #1f95b7 0%, #8123a2 100%);
  filter: blur(300px);
  transform: rotate(24.51deg);
  z-index: -1;
`;
