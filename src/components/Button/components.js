import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size[4]};
  //TODO
  background: linear-gradient(89.97deg, #fe6f5f -4.83%, #ff2e16 105.37%);
  max-width: 326px;
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.main};
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 0px 13px 4px rgba(222, 73, 55, 0.2);
  box-sizing: border-box;

  &:hover {
    color: #f0094a;
    background: transparent;
    box-shadow: none;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #f0094a;
    box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003,
      4px 4px 5px 0px #0002;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #f0094a;
    box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003,
      4px 4px 5px 0px #0002;
  }

  &:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 600px) {
    max-width: 246px;
    font-size: 16px;
    min-height: 46px;
  }
`;
