import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 70px;
  position: relative;

  img {
    position: absolute;
    bottom: -9%;
    left: 6%;
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
  overflow-x: clip;
  user-select: none;
  min-height: 400px;
`;

export const Title = styled.h1`
  font-family: Generator;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text.turquoise};
  font-size: ${({ theme }) => theme.typography.size[17]};
  padding-left: 100px;

  ${({ theme }) => theme.below.m`
    font-size: 120px;
    padding-left: 80px;  
  `}
`;

export const Description = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size[4]};
  position: absolute;
  top: 70px;
  left: 527px;
  //TODO
  color: #ebebeb;
  max-width: 665px;
  z-index: 2;

  ${({ theme }) => theme.below.l`
    font-size: 21px;
    padding-right: 20px;
  `}

  ${({ theme }) => theme.below.m`
    font-size: 18px;
  `}
`;

export const BackgroundTitle = styled.div`
  position: absolute;
  font-family: Generator;
  font-weight: 800;
  font-size: ${({ theme }) => theme.typography.size[18]};
  color: ${({ theme }) => theme.colors.background.body};
  -webkit-text-stroke: 1px #273d5c;
  text-align: end;
  z-index: -1;
  bottom: 0;
  right: -60px;

  ${({ theme }) => theme.above.xxl`
    font-size: ${({ theme }) => theme.typography.size[19]};
    bottom: -110px;
  `}

  ${({ theme }) => theme.below.xxl`
    bottom: -60px;
  `}

  ${({ theme }) => theme.below.l`
    font-size: 250px;
    bottom: 0px;
  `}

  ${({ theme }) => theme.below.m`
      font-size: 230px;
      bottom: 39px;
  `}
`;

export const ArticleTitle = styled.h2`
  font-family: NAMU;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[12]};
  color: ${({ theme }) => theme.colors.text.main};
  margin-bottom: 30px;
  max-width: 820px;
  line-height: 54px;

  ${({ theme }) => theme.above.xxl`
    margin-top: 50px;
  `}
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const SalaryWrapper = styled.div`
  position: relative;
  padding: 0 34px;
  margin-top: 150px;
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
  background: ${({ theme, index }) => theme.colors.background.salaryTablets[index]};
  background-blend-mode: overlay;
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
    background: ${({ theme, index }) => theme.colors.background.linearGradients[index]};
  }

  ${({ theme }) => theme.below.m`
    max-width: 130px; 
  `}
`;

export const Salary = styled.div`
  color: #fff;
  font-weight: 700;
  line-height: 160%;
  margin: ${({ theme, index }) => `${theme.margin.salaryTablets[index]}`} 0;

  ${({ theme }) => theme.below.m`
    font-size: 24px; 
  `}
`;

export const Position = styled.div`
  color: #c4c4c4;
  font-weight: 700;
  line-height: 120%;

  ${({ theme }) => theme.below.m`
    font-size: 23px; 
  `}
`;

export const VacanciesNote = styled.div`
  color: #fe6f5f;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 200px;
`;

export const BackgroundFlash = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  right: 390px;
  bottom: 43px;
  background: linear-gradient(
    180deg,
    rgba(95, 14, 145, 0.1) 0%,
    rgba(31, 155, 189, 0.1) 100%
  );
  filter: blur(200px);
`;
