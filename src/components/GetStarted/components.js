import styled from 'styled-components';

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

export const GetStartedFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 285px;
  margin-top: 240px;
  gap: 15px;

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
  border-bottom: 1px solid #2e2e2e;
  min-width: 430px;
  max-width: 430px;
  padding-bottom: 10px;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.text.main};
  font-size: ${({ theme }) => theme.typography.size[1]};
  box-sizing: border-box;

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
