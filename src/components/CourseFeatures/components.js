import styled from 'styled-components';

const FEATURE_HEIGHT = 74;

export const Wrapper = styled.div`
  margin-top: 115px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const FeatureWrapper = styled.div`
  position: relative;
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
`;

export const FeatureDescription = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: ${({ theme }) => theme.colors.text.lightGrey};
  text-align: center;
  max-width: 283px;
  margin-left: 15px;
`;

export const LineBlock = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: #fe6f5f;
  margin-top: ${FEATURE_HEIGHT / 2}px;
`;
