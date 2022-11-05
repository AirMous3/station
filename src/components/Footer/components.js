import styled from 'styled-components/macro';

import instagram from '@/assets/icons/instagram.svg';
import telegram from '@/assets/icons/telegram.svg';

export const Section = styled.section`
  min-height: 223px;
  background: #262626;
  padding: 24px 122px 32px 72px;
  box-sizing: border-box;
`;
export const Communication = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  margin-top: 24px;
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
`;

export const Logo = styled.img``;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-left: 72px;
`;

export const Icon = styled.div`
  width: 46px;
  height: 46px;
  background-color: #1c1c1c;
  background-image: url('${instagram}');
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
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
`;
