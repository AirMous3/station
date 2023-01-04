import styled from 'styled-components';

export const Header = styled.header`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 18px;
  display: flex;
  @media (max-width: 1150px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 650px) {
    padding-left: 20px;
    padding-right: 20px;
    img {
      width: 120px;
    }
  }
`;

export const Navbar = styled.nav`
  display: flex;
  margin-left: auto;
  z-index: 1000;
  align-items: center;

  @media (max-width: 1150px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  cursor: pointer;
  margin-left: 80px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #ececec;

  @media (max-width: 1415px) {
    margin-left: 40px;
  }
`;

export const Button = styled.div`
  min-width: 210px;
  min-height: 44px;
  border: 2px solid rgba(254, 111, 95, 1);
  border-radius: 12px;
  padding: 10px 30px 10px 30px;
  box-sizing: border-box;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #fe6f5f;
  margin-left: 200px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 1415px) {
    margin-left: 40px;
  }
`;
