import styled from 'styled-components';

export const Section = styled.section`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  min-height: 760px;
  padding: 70px 0 50px;
`;

export const Description = styled.div`
  font-family: Roboto;
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: ${({ theme }) => theme.colors.text.additional};
  max-width: 164px;
  text-align: center;
  user-select: none;
`;

export const RevertDescription = styled(Description)`
  display: flex;
  align-items: end;

  ${({ theme }) => theme.below.m`
    display: none;
  `}
`;

export const Title = styled.h1`
  font-family: Generator;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[17]};
  color: ${({ theme }) => theme.colors.text.main};
  position: absolute;
  text-transform: uppercase;
  transform: rotate(34.19deg);
  top: 185px;
  left: 150px;
  z-index: 2;

  ${({ theme }) => theme.below.m`
    left: 105px;
    font-size: 140px;
  `}

  ${({ theme }) => theme.below.s`
    font-size: 115px;
  `}
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-left: -200px;

  ${({ theme }) => theme.below.m`
    margin-left: 55px;
    margin-top: 106px;
  `}
`;

export const FirstImage = styled.img`
  width: 100%;

  ${({ theme }) => theme.below.s`
    width: 90%;
  `}
`;

export const SecondMainImage = styled.img`
  position: absolute;
  bottom: -46px;
  right: -324px;
  width: 100%;

  ${({ theme }) => theme.below.m`
    bottom: -46px;
  `}

  ${({ theme }) => theme.below.s`
    width: 75%;
    right: -110px;
  `}
`;
