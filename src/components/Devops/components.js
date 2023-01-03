import { motion } from 'framer-motion';
import styled from 'styled-components/macro';

export const Section = styled(motion.section)`
  position: relative;
  margin-bottom: 200px;
  margin-top: 70px;
  min-height: 1626px;
`;

export const TitleWrapper = styled.div`
  position: relative;
  user-select: none;
  min-height: 400px;

  @media (max-width: 1000px) {
    min-height: 312px;
  }
`;

export const Title = styled(motion.h1)`
  font-family: 'Generator';
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text.turquoise};
  font-size: ${({ theme }) => theme.typography.size[14]};
  padding-left: 70px;

  @media (max-width: 1000px) {
    font-size: 111px;
  }
`;

export const Description = styled(motion.div)`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size[4]};
  position: absolute;
  //TODO
  color: #ebebeb;
  max-width: 703px;
  z-index: 2;
  top: 97px;
  left: 418px;

  @media (max-width: 1180px) {
    font-size: 19px;
  }

  @media (max-width: 1000px) {
    font-size: 16px;
    top: 95px;
    left: 400px;
  }
  @media (max-width: 800px) {
    font-size: 14px;
    left: 150px;
    max-width: 500px;
  }
`;

export const BackgroundTitle = styled.div`
  position: absolute;
  font-family: 'Generator';
  font-weight: 800;
  font-size: ${({ theme }) => theme.typography.size[18]};
  color: ${({ theme }) => theme.colors.background.body};
  -webkit-text-stroke: 1px #273d5c;
  text-align: end;
  z-index: -1;
  bottom: -27px;
  right: -187px;

  @media (max-width: 1465px) {
    font-size: 270px;
    bottom: 0px;
    right: -65px;
  }

  @media (max-width: 1218px) {
    right: 64px;
  }

  @media (max-width: 1000px) {
    font-size: 207px;
    bottom: -9px;
    right: 23px;
  }

  @media (max-width: 800px) {
    font-size: 167px;
    bottom: -47px;
    right: 0;
  }
`;

export const ArticleTitle = styled(motion.h2)`
  font-family: 'NAMU';
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[12]};
  color: ${({ theme }) => theme.colors.text.main};
  margin-bottom: 30px;
  margin-top: 60px;
  max-width: 820px;
  line-height: 54px;

  @media (max-width: 1180px) {
    font-size: 75px;
  }
  @media (max-width: 800px) {
    font-size: 65px;
  }
  @media (max-width: 690px) {
    font-size: 58px;
  }
  @media (max-width: 620px) {
    font-size: 50px;
  }
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 90px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    padding-left: 100px;
    padding-right: 40px;
  }
`;

export const SalaryWrapper = styled.div`
  position: relative;
  padding: 0 34px;
  margin-top: 150px;

  @media (max-width: 800px) {
    padding: 0;
  }
`;

export const SalaryTabletsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 44px;
  padding-left: 42px;
  padding-right: 65px;

  @media (max-width: 1100px) {
    padding: 0;
  }
`;

export const SalaryTablet = styled.div`
  position: relative;
  font-family: 'Inter';
  text-align: center;
  font-size: 30px;
  max-width: 162px;
  padding: 13px 20px 23px;
  box-sizing: border-box;
  border-radius: 40px;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
  background: ${({ theme, index }) =>
    theme.colors.background.salaryTablets[index]};
  background-clip: padding-box;
  border: solid 2px transparent;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
    background: ${({ theme, index }) =>
      theme.colors.background.linearGradients[index]};
  }

  ${({ theme }) => theme.below.m`
    max-width: 130px; 
  `};

  @media (max-width: 800px) {
    max-width: 115px;
  }

  @media (max-width: 670px) {
    max-width: 100px;
    border-radius: 31px;
  }
`;

export const Salary = styled.div`
  color: #fff;
  font-weight: 700;
  line-height: 160%;
  margin: ${({ theme, index }) => `${theme.margin.salaryTablets[index]}`} 0;

  ${({ theme }) => theme.below.m`
    font-size: 24px; 
  `};

  @media (max-width: 800px) {
    font-size: 19px;
  }
  @media (max-width: 670px) {
    font-size: 16px;
  }
`;

export const Position = styled.div`
  color: #c4c4c4;
  font-weight: 700;
  line-height: 120%;

  ${({ theme }) => theme.below.m`
    font-size: 23px; 
  `};

  @media (max-width: 670px) {
    font-size: 16px;
  }
`;

export const VacanciesNote = styled.div`
  color: #fe6f5f;
  font-weight: 700;
  font-size: 30px;

  @media (max-width: 660px) {
    font-size: 20px;
  }
  
`;

export const BackgroundFlashSecond = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  right: 13%;
  bottom: 10%;
  background: linear-gradient(
    180deg,
    rgba(95, 14, 145, 0.1) 0%,
    rgba(31, 155, 189, 0.1) 100%
  );
  filter: blur(100px);
`;

export const BackgroundFlash = styled.div`
  position: absolute;
  width: 50%;
  height: 200%;
  left: 0;
  bottom: -100%;
  background: linear-gradient(
    180deg,
    #1e446436 0%,
    #00399542 50%,
    #6066954f 100%
  );
  -webkit-filter: blur(150px);
  z-index: -1;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  bottom: -30%;
  left: -7%;
  z-index: -1;

  @media (max-width: 690px) {
    right: 0;
    left: auto;
  }
`;
