import emailjs from '@emailjs/browser';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import image from '@/assets/icons/getStartedImage.png';
import { Container } from '@/components/Container';

import * as S from './components';

const buttonStyle = {
  backgroundColor: 'inherit',
  color: 'white',
  border: 'none',
};

const inputStyle = {
  maxWidth: '308px',
  minWidth: '308px',
  minHeight: '44px',
  background: 'inherit',
  border: '1px solid #cccccc',
  borderRadius: '12px',
  padding: '10px 18px 10px 50px',
  color: '#2E2D2F',
  fontWeight: '600',
  fontSize: '16px',
};

export const GetStarted = () => {
  const [state, setState] = useState({ name: '', phone: '', message: '' });
  const { name, phone, message } = state;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        { name, phone, message },
        process.env.REACT_APP_EMAIL_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    setState({ ...state, name: '', message: '' });
  };
  return (
    <S.Section>
      <Container>
        <S.Wrapper>
          <S.Article id="getStarted">Измени свою жизнь уже сейчас</S.Article>

          <S.BackgroundFlash />

          <S.Image src={image} alt="backImage" />

          <S.GetStartedForm>
            <S.InputsWrapper>
              <S.Input
                type="text"
                placeholder="Имя"
                name="name"
                value={name}
                onChange={(e) => setState({ ...state, name: e.currentTarget.value })}
              />
              <PhoneInput
                buttonStyle={buttonStyle}
                country={'by'}
                inputStyle={inputStyle}
                value={phone}
                onChange={(phone) => setState({ ...state, phone })}
                name="phone"
              />
              <S.CommentInput
                type="text"
                placeholder="Комментарий..."
                name="message"
                value={message}
                onChange={(e) => setState({ ...state, message: e.currentTarget.value })}
              />
              <S.RulesWrapper>
                <S.Checkbox type="checkbox" />
                <S.Rules>
                  Я ознакомился c <span>договором оферты</span> и согласен на обработку
                  персональных данных
                </S.Rules>
              </S.RulesWrapper>
            </S.InputsWrapper>

            <S.ButtonStart onClick={sendEmail}>Записаться</S.ButtonStart>
          </S.GetStartedForm>
        </S.Wrapper>
      </Container>
    </S.Section>
  );
};
