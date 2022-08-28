import styled from 'styled-components';

export const Section = styled.section`
  font-family: Roboto;
  color: ${({ theme }) => theme.colors.text.main};
  margin-bottom: 200px;
`;
export const Title = styled.h2`
  font-family: NAMU;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[13]};
  //TODO
  color: #d2d2d2;
  max-width: 455px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;

  span {
    //TODO
    background: rgba(254, 111, 95, 0.2);
    border-right: 2px solid #fe6f5f;
    border-left: 2px solid #fe6f5f;
    padding: 10px 20px;
    box-sizing: border-box;
    position: relative;

    &:before {
      content: '';
      width: 14px;
      height: 14px;
      //TODO
      background: #fe6f5f;
      border-radius: 50px;
      display: inline-block;
      position: absolute;
      top: -13px;
      left: -8px;
    }

    &:after {
      content: '';
      width: 14px;
      height: 14px;
      //TODO
      background: #fe6f5f;
      border-radius: 50px;
      display: inline-block;
      position: absolute;
      top: -13px;
      right: -8px;
    }
  }
`;

export const Features = styled.div`
  display: flex;
  gap: 70px;
  margin-left: 35%;
  margin-top: -13%;
`;

export const Feature = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: linear-gradient(
    126.59deg,
    rgba(255, 255, 255, 0.4) 12.11%,
    rgba(255, 255, 255, 0.1) 73.08%
  );
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  padding: 25px 31px;
  box-sizing: border-box;
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 40px;
  max-width: 346px;
  max-height: 205px;
  min-height: 205px;
`;

export const FeatureTitle = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[5]};
  text-transform: uppercase;
`;

export const FeatureDescription = styled.div`
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.size[0]};
`;
export const LeftFeatures = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 150px;
  justify-content: center;
`;

export const RightFeatures = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 150px;
`;
