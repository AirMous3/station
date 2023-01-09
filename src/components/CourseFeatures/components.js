import styled from 'styled-components';

const FEATURE_HEIGHT = 74;

export const Wrapper = styled.div`
  margin-top: 115px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 650px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const FeatureWrapper = styled.div`
  position: relative;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FeatureTitle = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[2]};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.main};
  //TODO
  border: 2px solid #fe6f5f;
  border-radius: 50px;
  max-width: 326px;
  height: ${FEATURE_HEIGHT}px;
  padding: 21px 20px;
  box-sizing: border-box;
  margin-bottom: 30px;
  box-shadow: 0 0 8px 4px rgba(255, 137, 122, 0.2);

  @media (max-width: 1000px) {
    font-size: 16px;
    max-width: 250px;
    min-width: 250px;

    height: 52px;
    padding: 14px 3px;
  }

  @media (max-width: 450px) {
    max-width: 205px;
    min-width: 205px;
    font-size: 12px;
    height: 35px;
    padding: 8px 3px;
  }
`;

export const FeatureDescription = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: ${({ theme }) => theme.colors.text.lightGrey};
  text-align: center;
  max-width: 283px;
  margin-left: 15px;

  @media (max-width: 1000px) {
    font-size: 14px;
    max-width: 250px;
  }
  @media (max-width: 450px) {
    font-size: 10px;
    max-width: 186px;
  }
`;

export const LineBlock = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: #fe6f5f;
  margin-top: ${FEATURE_HEIGHT / 2}px;
  min-width: 35px;

  @media (max-width: 1000px) {
    height: 40px;
    width: 2px;
    margin-top: 10px;
    min-width: 0;
  }
  @media (max-width: 450px) {
    height: 24px;
  }
`;
