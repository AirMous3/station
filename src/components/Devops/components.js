import styled from 'styled-components';

import backgroundImageDevops from '@/assets/icons/backgroundDevops.png';

export const Section = styled.section`
  padding-top: 70px;
`;
export const TitleWrapper = styled.div`
  position: relative;
  overflow-x: clip;
  user-select: none;
`;
export const Title = styled.h1`
  font-family: Generator;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text.turquoise};
  font-size: ${({ theme }) => theme.typography.size[17]};
  padding-left: 250px;
`;
export const Description = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size[4]};
  position: absolute;
  top: 70px;
  left: 527px;
  color: #ebebeb;
  max-width: 665px;
  z-index: 2;
`;
export const BackgroundTitle = styled.div`
  font-family: Generator;
  font-weight: 800;
  font-size: ${({ theme }) => theme.typography.size[19]};
  color: ${({ theme }) => theme.colors.background.body};
  -webkit-text-stroke: 1px #273d5c;
  text-align: end;
  margin-right: -70px;
`;
export const ArticleTitle = styled.h2`
  font-family: NAMU;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[12]};
  color: ${({ theme }) => theme.colors.text.main};
  margin-bottom: 30px;
  max-width: 820px;
  line-height: 54px;
`;
export const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SalaryWrapper = styled.div`
  padding: 0 34px;
  background-image: url(${backgroundImageDevops});
  background-repeat: no-repeat;
  background-position: 10% 10%;
`;
export const SalaryTabletsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 44px;
`;

export const SalaryTablet = styled.div`
  position: relative;
  font-family: Inter;
  text-align: center;
  font-size: 30px;
  max-width: 162px;
  padding: 13px 20px 23px;
  box-sizing: border-box;
  border-radius: 40px;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: ${({ theme, index }) => theme.colors.background.salaryTablets[index]};
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -2;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: inherit;
    background: linear-gradient(
      124.48deg,
      #ffffff 14.54%,
      rgba(237, 96, 51, 0.17) 38.19%,
      #ed6033 54.86%,
      #ed6033 88.98%
    );
  }
`;

export const Salary = styled.div`
  color: #fff;
  font-weight: 700;
  line-height: 160%;
  // TODO
  margin: ${({ index }) => `${10 * index + 10}px`} 0;
`;

export const Position = styled.div`
  color: #c4c4c4;
  font-weight: 700;
  line-height: 120%;
`;

export const VacanciesNote = styled.div`
  font-family: Roboto;
  color: #fe6f5f;
  font-weight: 700;
  font-size: 30px;
  line-height: 160%;
`;
