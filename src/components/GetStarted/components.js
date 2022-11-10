import styled from 'styled-components/macro';

import buttonArrow from '@/assets/icons/buttonArrow.svg';
import { ArticleTitle } from '@/components/Devops/components';

export const Section = styled.section`
  margin-top: 200px;
  margin-bottom: 100px;
`;

export const Article = styled(ArticleTitle)`
  position: absolute;
  top: 0;
  left: 120px;
  line-height: 73px;
  text-align: center;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

export const GetStartedForm = styled.form`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  margin-left: 285px;
  margin-top: 240px;

  .selected-flag:hover {
    background-color: inherit;
  }

  .react-tel-input .flag-dropdown.open .selected-flag {
    background-color: inherit;
  }

  .country-name {
    color: red;
  }
`;

export const Input = styled.input`
  background-color: inherit;
  outline: none;
  border: none;
  border-bottom: 2px solid #ffffff;
  min-width: 430px;
  max-width: 430px;
  padding-bottom: 10px;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.text.main};
  font-size: ${({ theme }) => theme.typography.size[1]};
  box-sizing: border-box;
  margin-bottom: 25px;

  &::placeholder {
    color: #696969;
    font-weight: 600;
    font-size: ${({ theme }) => theme.typography.size[1]};
  }
`;

export const CommentInput = styled(Input)`
  margin-top: 80px;
`;

export const Button = styled.div`
  height: 100px;
  width: 100px;
  margin-top: 70px;
  margin-left: auto;
  margin-right: 65px;
  background: linear-gradient(180deg, #4ed3df 0%, #1d2efd 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.main};
  cursor: pointer;
  position: relative;

  &:after {
    position: absolute;
    margin-left: 20px;
    content: '';
    height: 50%;
    width: 50%;
    background: linear-gradient(180deg, #4ed3df 0%, #1d2efd 100%);
    filter: blur(40px);
  }
`;

export const ButtonText = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.size[2]};
  margin-left: -66px;

  &:after {
    content: url(${buttonArrow});
    margin-left: 8px;
  }
`;

export const BackgroundFlash = styled.div`
  position: absolute;
  width: 326px;
  height: 361px;
  top: -50px;
  left: 243px;
  background: linear-gradient(180deg, #1f95b7 0%, #8123a2 100%);
  filter: blur(100px);
  transform: rotate(-38.18deg);
  z-index: -1;
`;

export const InputsWrapper = styled.div`
  font-family: 'Roboto';
  position: relative;
  text-align: center;
  font-size: 30px;
  padding: 40px 55px 20px 41px;
  box-sizing: border-box;
  border-radius: 40px;
  background: #1c1c1c;
  background-clip: border-box;
  background-clip: padding-box;
  border: solid 4px transparent;

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
    background: linear-gradient(
      124.48deg,
      #ffffff 14.54%,
      rgba(237, 96, 51, 0.17) 38.19%,
      #ed6033 54.86%,
      #ed6033 88.98%
    );
  }
`;
