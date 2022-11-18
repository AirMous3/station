import styled from 'styled-components/macro';

import star from '@/assets/icons/star.svg';
import { Button } from '@/components/Button';
import { ArticleTitle } from '@/components/Devops/components';

export const Section = styled.section`
  margin-top: 200px;
  margin-bottom: 100px;
`;

export const Article = styled(ArticleTitle)`
  position: absolute;
  top: -85px;
  left: 90px;
  line-height: 73px;
  text-align: center;
  margin: 0;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const GetStartedForm = styled.form`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .selected-flag:hover {
    background-color: inherit;
  }

  .flag-dropdown {
    background-color: inherit;
  }

  .react-tel-input {
    text-align: start;
    max-width: 280px;
  }

  .react-tel-input .flag-dropdown.open .selected-flag {
    background-color: inherit;
  }

  .react-tel-input .selected-flag {
    padding: 0 0 0 20px;
  }

  .country-name {
    color: red;
  }
`;

export const Input = styled.input`
  min-width: 280px;
  min-height: 44px;
  background-color: inherit;
  outline: none;
  border: none;
  padding: 10px 18px;
  color: ${({ theme }) => theme.colors.text.main};
  font-size: ${({ theme }) => theme.typography.size[1]};
  box-sizing: border-box;

  &::placeholder {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #999999;
  }
`;

export const CommentInput = styled(Input)``;

export const ButtonStart = styled(Button)`
  max-height: 49px;
  min-height: 0;
  max-width: 285px;
  margin-top: 40px;
  padding: 14px 93px;
  font-weight: 500;
  font-size: 18px;
  margin-left: 0;
  margin-right: 0;
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
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  text-align: center;
  font-size: 30px;
  box-sizing: border-box;
  border-radius: 40px;
`;

export const Image = styled.img`
  max-height: 528px;
`;

export const RulesWrapper = styled.div`
  display: flex;
`;

export const Rules = styled.div`
  font-family: 'Gilroy';
  font-weight: 400;
  font-size: 12px;
  color: #f2f2f2;
  text-align: start;
  margin-left: 10px;
  max-width: 400px;

  span {
    text-decoration: underline;
    color: #eb5757;
  }
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 308px;
  border: 1px solid #cccccc;
  border-radius: 12px;
`;

export const InputStarImage = styled.div`
  background-image: url(${star});
  background-repeat: no-repeat;
  height: 7px;
  width: 7px;
`;

export const Comments = styled.textarea`
  font-family: 'Roboto';
  max-width: 280px;
  min-width: 280px;
  min-height: 92px;
  border: none;
  resize: none;
  background: inherit;
  outline: none;
  padding: 10px 20px 20px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 16px;
  color: #999999;
`;
