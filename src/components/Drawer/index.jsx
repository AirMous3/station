import React, { useContext } from 'react';
import { Portal } from 'react-portal';

import { ApplicationForm } from '@/components/ApplicationForm';
import { ModalContext } from '@/context/ModalContext';

import * as S from './components';

export const Modal = () => {
  const { setVisible, visible } = useContext(ModalContext);
  return (
    <Portal>
      <S.Mask visible={visible} />
      {visible && (
        <S.Modal>
          <S.ModalWrapper>
            <S.Cross onClick={() => setVisible(false)} />
            <S.Title>
              Отправь заявку на курс и начни двигаться к карьере DevOps-инженера
              уже сейчас!
            </S.Title>
            <ApplicationForm />
          </S.ModalWrapper>
        </S.Modal>
      )}
    </Portal>
  );
};
