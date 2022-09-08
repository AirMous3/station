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
  borderBottom: '1px solid #2e2e2e',
};

const inputStyle = {
  background: 'inherit',
  border: 'none',
  color: 'white',
  borderBottom: '1px solid #2e2e2e',
  minWidth: '430px',
  fontWeight: '600',
  fontSize: '16px',
};

export const GetStarted = () => {
  const [state, setState] = useState();

  return (
    <S.Section>
      <Container>
        <S.Article id="getStarted">Измени свою жизнь уже сейчас</S.Article>

        <S.Wrapper>
          <img src={image} alt="" />

          <S.GetStartedFormWrapper>
            <S.Input type="text" placeholder="Твоё имя" />

            <PhoneInput
              buttonStyle={buttonStyle}
              country={'by'}
              inputStyle={inputStyle}
              value={state}
              onChange={(phone) => setState(phone)}
            />
            <S.CommentInput type="text" placeholder="Коментарий" />

            <S.Button>
              <S.ButtonText>Записаться</S.ButtonText>
            </S.Button>
          </S.GetStartedFormWrapper>
        </S.Wrapper>
      </Container>
    </S.Section>
  );
};
