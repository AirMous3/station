import styled from 'styled-components';

export const Section = styled.section``;
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
