import styled from 'styled-components/macro';

import instagram from '@/assets/icons/instagram.svg';
import telegram from '@/assets/icons/telegram.svg';

export const Section = styled.section`
  min-height: 223px;
  background: #262626;
  padding: 24px 122px 32px 72px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    padding: 24px 36px 32px 28px;
  }
`;
export const Communication = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ContactsDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;

  @media (max-width: 1000px) {
    font-size: 14px;
  }

  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

export const Logo = styled.img`
  @media (max-width: 450px) {
    max-width: 136px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-left: 72px;

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const Icon = styled.div`
  width: 46px;
  height: 46px;
  background-color: #1c1c1c;
  background-image: url('${instagram}');
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  @media (max-width: 450px) {
    width: 28px;
    height: 28px;
    background-size: 15px;
  }
`;

export const TgIcon = styled(Icon)`
  background-image: url('${telegram}');
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  gap: 88px;
  margin-top: 11px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
  }
  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

export const FeaturesDataWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Feature = styled.li`
  cursor: pointer;
`;

export const Rights = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #999999;
  margin-top: 40px;

  @media (max-width: 450px) {
    font-size: 10px;
  }
`;
