import styled, { css } from 'styled-components/macro';

import arrow from '@/assets/icons/englishArrow.svg';
import { Button } from '@/components/Button';
import { ArticleTitle } from '@/components/Devops/components';

export const Section = styled.section`
  color: ${({ theme }) => theme.colors.text.main};
  margin-top: 100px;
  margin-bottom: 150px;
  position: relative;
  min-height: 1766px;
`;

export const Article = styled(ArticleTitle)``;

export const PackagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 80px;
  text-align: center;
  margin-bottom: 156px;
  flex-wrap: wrap;
`;

export const PackageWrapper = styled.ul`
  position: relative;
  max-width: 358px;
  min-width: 358px;
  max-height: 642px;
  min-height: 642px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
  box-sizing: border-box;
  align-items: center;
  background: #1c1c1c;
  justify-content: space-between;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -2px; /* !importanté */
    border-radius: inherit; /* !importanté */
    background: linear-gradient(180deg, #1d2efd 0%, #4ed3df 100%);
    box-shadow: 0px 1px 8px 0px rgba(78, 211, 223, 1),
      0px 1px 12px 0px rgba(29, 46, 253, 1);
  }

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    margin: -2px; /* !importanté */
    border-radius: inherit; /* !importanté */
    box-shadow: inset 0px 1px 8px 0px rgba(78, 211, 223, 1),
      inset 0px 1px 12px 0px rgba(29, 46, 253, 1);
  }

  ${({ style }) =>
    style &&
    css`
      background: linear-gradient(
        145.55deg,
        #fe6f5f 3.75%,
        #dd435a 35.36%,
        #7082b6 81.94%,
        #288ce2 110.22%
      );

      :before {
        box-shadow: none;
        background: linear-gradient(
          145.55deg,
          #fe6f5f 3.75%,
          #dd435a 35.36%,
          #7082b6 81.94%,
          #288ce2 110.22%
        );
        top: -10px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        filter: blur(7px);
      }

      :after {
        box-shadow: none;
      }

      -webkit-box-shadow: 0px -15px 21px 11px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 0px -15px 21px 11px rgba(34, 60, 80, 0.2);
      box-shadow: 0px -15px 21px 11px rgba(34, 60, 80, 0.2);

      ${PackageButton} {
        background: linear-gradient(230.25deg, #dadada 4.82%, #ffffff 91.47%);
        color: #3f3f3f;
      }
    `};

  @media (max-width: 450px) {
    max-width: 337px;
    min-width: 337px;
    max-height: 528px;
    min-height: 528px;
  }
`;

export const PackageTitle = styled.h3`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[8]};
  text-transform: uppercase;
  margin-bottom: 24px;

  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

export const PackageFeature = styled.li`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size[1]};
  width: 100%;
  padding-bottom: 16px;
  margin-bottom: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid transparent;
    //TODO
    border-image: radial-gradient(
      97.56% 73428301094.76% at 100% 3426.29%,
      rgba(255, 255, 255, 0) 2.49%,
      #ffffff 52.18%,
      rgba(255, 255, 255, 0) 94.59%
    );
    border-image-slice: 1;
  }

  @media (max-width: 450px) {
    font-size: 16px;
    padding-bottom: 10px;
    margin-bottom: 12px;
  }
`;

export const PackagePrice = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[9]};

  @media (max-width: 450px) {
    font-size: 24px;
  }
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

  @media (max-width: 900px) {
    font-size: 40px;
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

  @media (max-width: 900px) {
    font-size: 18px;
  }
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

  @media (max-width: 900px) {
    font-size: 14px;
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

export const PackageButton = styled.button`
  position: relative;
  z-index: 12;
  min-height: 58px;
  max-height: 58px;
  min-width: 201px;
  max-width: 201px;
  background: linear-gradient(230.25deg, #ff630b 4.82%, #ff0000 91.47%);
  box-shadow: 0px 4px 68px 0px rgba(255, 89, 74, 0.63);
  border: none;
  border-radius: 5px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  /* identical to box height */
  color: #ffffff;
  cursor: pointer;
  margin-top: 30px;

  @media (max-width: 450px) {
    min-width: 201px;
    max-width: 201px;
    min-height: 39px;
    max-height: 39px;
  }
`;
