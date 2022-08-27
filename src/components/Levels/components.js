import styled from 'styled-components';

import arrowImage from '@/assets/icons/arrow.svg';

export const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 90px;
  font-family: Roboto;
  color: white;
`;
export const LevelWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;
export const LevelNumber = styled.div`
  font-family: Generator;
  font-size: ${({ theme }) => theme.typography.size[7]};
  color: ${({ theme }) => theme.colors.text.darkGrey};
`;
export const LevelTitle = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[12]};
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #3a3a3a;
  width: 100%;
  padding: 30px 50px;

  //TODO
  &:first-child {
    border-top: 2px solid #3a3a3a;
  }
`;

export const ArrowButton = styled.div`
  border-radius: 50%;
  min-width: 112px;
  min-height: 112px;
  border: 3px solid #50dadd;
  background-image: url(${arrowImage});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
