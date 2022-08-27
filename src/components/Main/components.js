import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  min-height: 760px;
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
`;
export const ImageWrapper = styled.div`
  position: relative;
  margin-left: -200px;
`;
export const SecondMainImage = styled.img`
  position: absolute;
  bottom: 10px;
  right: -185px;
`;
