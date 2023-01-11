import styled from 'styled-components/macro';

import cross from '@/assets/icons/cross.svg';

export const Mask = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.45);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  ${({ visible }) =>
    visible
      ? 'opacity: 1;  backdrop-filter: blur(1.8px)'
      : 'opacity: 0; pointer-events: none'};
`;

export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  color: white;
`;

export const ModalWrapper = styled.div`
  width: 735px;
  height: 719px;
  background: #1c1c1c;
  border-radius: 20px;
  padding: 10px 40px 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 450px) {
    width: 334px;
    height: 664px;
    padding: 8px 18px 16px;
  }
`;

export const Cross = styled.div`
  width: 40px;
  height: 40px;
  margin-left: auto;
  padding-top: 20px;
  background: url(${cross}) no-repeat center;
  background-size: 28px;
  transform: rotate(45deg);
  cursor: pointer;

  @media (max-width: 450px) {
    background-size: 14px;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-family: 'NAMU';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  max-width: 564px;
  margin-bottom: 55px;

  @media (max-width: 650px) {
    font-size: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;
