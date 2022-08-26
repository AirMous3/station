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
`;
export const RevertDescription = styled(Description)`
  display: flex;
  align-items: end;
`
export const Title = styled.div`
  color: ${({ theme }) => theme.colors.text.main};
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[16]};
  position: absolute;
  text-transform: uppercase;
  transform: rotate(34.19deg);
  top: 185px;
  left: 150px;
  z-index: 2;
`;
export const ImageWrapper = styled.div`
  position: relative;
`;
export const SecondMainImage = styled.img`
  position: absolute;
  bottom: 10px;
  right: -185px;
`;
