import styled from 'styled-components';

export const Section = styled.section`
  color: ${({ theme }) => theme.colors.text.main};
  margin-bottom: 200px;
  justify-content: center;

  ${({ theme }) => theme.below.m`
    display: flex;
    flex-direction: column;
  `}
`;
export const Title = styled.h2`
  font-family: NAMU;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[13]};
  //TODO
  color: #d2d2d2;
  max-width: 455px;
  margin-bottom: 50px;
  line-height: 76.8px;
  margin-left: 10%;

  span {
    max-height: 106px;
    display: block;
    //TODO
    background: rgba(254, 111, 95, 0.2);
    border-right: 2px solid #fe6f5f;
    border-left: 2px solid #fe6f5f;
    padding: 0px 20px 22px 20px;
    box-sizing: border-box;
    position: relative;
    margin-top: 14px;
    margin-left: -20px;

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

  ${({ theme }) => theme.below.l`
    margin-left: 25%;
  `}

  ${({ theme }) => theme.below.m`
    margin-left: 0;
  `}
`;

export const Circle = styled.div`
  position: absolute;
  right: -42px;
  bottom: -39px;
  width: 96px;
  height: 96px;
  z-index: -1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(231.92deg, #ffffff 29.99%, #6c6c6c 91.35%);
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(231.92deg, #4ed3df 29.99%, #1d2efd 91.35%);
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
`;

export const CircleRight = styled(Circle)`
  left: -45px;
  bottom: -45px;
`;

export const FeatureWrapper = styled.li`
  position: relative;

  &:hover ${Circle} {
    &:after {
      opacity: 1;
      visibility: visible;
    }

    &:before {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
  padding-left: 35px;
  padding-top: 23px;
  padding-right: 26px;
  box-sizing: border-box;
  border-radius: 40px;
  max-width: 346px;
  max-height: 205px;
  min-height: 205px;
  border: 2px solid #868a8c;
  position: relative;
  backdrop-filter: blur(20px);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    background: linear-gradient(
      126.59deg,
      rgba(255, 255, 255, 0.4) 12.11%,
      rgba(255, 255, 255, 0.1) 73.08%
    );
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    background: linear-gradient(
      111.15deg,
      rgba(78, 211, 223, 0.2) 17.66%,
      rgba(29, 46, 253, 0.2) 94.11%
    );
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  &:hover {
    &:after {
      opacity: 1;
      visibility: visible;
    }

    &:before {
      opacity: 0;
      visibility: hidden;
    }
  }
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
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 150px;
  justify-content: center;

  &:after {
    position: absolute;
    top: 95px;
    right: -35px;
    content: '';
    height: 100%;
    width: 1px;
    background-color: #4ed3df;
    box-shadow: 0px 0px 5px 3px rgba(78, 211, 223, 0.2);
    z-index: -2;
  }
`;

export const RightFeatures = styled(LeftFeatures)`
  &:after {
    display: none;
  }
`;
