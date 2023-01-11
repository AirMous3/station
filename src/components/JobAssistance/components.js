import styled from 'styled-components/macro';

export const Section = styled.section`
  color: ${({ theme }) => theme.colors.text.main};
  margin-bottom: 200px;
  justify-content: center;
  min-height: 1088px;

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
    max-width: 454px;
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

  @media (max-width: 1000px) {
    font-size: 68px;
    line-height: 40.8px;
    max-width: 340px;
  }
  @media (max-width: 450px) {
    font-size: 30px;
    line-height: 8.8px;
    max-width: 160px;

    span {
      padding: 4px 0px 15px 21px;
    }
  }
`;

export const Features = styled.div`
  position: relative;
  display: flex;
  gap: 70px;
  margin-left: 35%;
  margin-top: -13%;

  @media (max-width: 1000px) {
    justify-content: center;
    margin-left: 0;
    margin-top: 0;
  }

  @media (max-width: 600px) {
    gap: 46px;
  }
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
  }

  @media (max-width: 1000px) {
    bottom: -25px;
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

  @media (max-width: 450px) {
    left: ${({ left }) => (left ? '-60px' : '60px')};
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
  padding-left: 25px;
  padding-top: 20px;
  padding-right: 10px;
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
    border-radius: inherit;
    background: linear-gradient(
      126.59deg,
      rgba(255, 255, 255, 0.4) 12.11%,
      rgba(255, 255, 255, 0.1) 73.08%
    );
    -webkit-transition: background 0.5s ease;
    transition: background 0.5s ease;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(
      111.15deg,
      rgba(78, 211, 223, 0.2) 17.66%,
      rgba(29, 46, 253, 0.2) 94.11%
    );
    opacity: 0;
    visibility: hidden;
    -webkit-transition: background 0.5s ease;
    transition: background 0.5s ease;
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

  @media (max-width: 1000px) {
    max-width: 268px;
    max-height: 180px;
    min-height: 180px;
  }
  @media (max-width: 600px) {
    padding-left: 20px;
    padding-right: 12px;
    min-width: 233px;
  }
  @media (max-width: 450px) {
    max-width: 233px;
    min-width: 233px;
    min-height: 132px;
    max-height: 132px;
    border-radius: 20px;
    gap: 4px;
    padding-top: 9px;
    padding-right: 8px;
  }
`;

export const FeatureTitle = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[5]};
  text-transform: uppercase;

  @media (max-width: 1000px) {
    font-size: 16px;
  }
`;

export const FeatureDescription = styled.div`
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.size[0]};

  @media (max-width: 1000px) {
    font-size: 12px;
  }
  @media (max-width: 450px) {
    font-size: 10px;
  }
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

  @media (max-width: 600px) {
    gap: 208px;
  }
  @media (max-width: 450px) {
    gap: 60px;

    &:after {
      right: 116px;
    }
  }
`;

export const RightFeatures = styled(LeftFeatures)`
  &:after {
    display: none;
  }
`;

export const BackgroundFlash = styled.div`
  position: absolute;
  width: 277px;
  height: 378px;
  right: 30%;
  top: -10%;
  background: linear-gradient(180deg, #372c6c 0%, #2d4b60 50%, #2d4b60 100%);
  filter: blur(100px);
  z-index: -1;
`;
