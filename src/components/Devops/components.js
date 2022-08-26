import styled from 'styled-components';

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
