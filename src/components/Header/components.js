import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

export const Header = styled.header`
  padding-left: 50px;
  padding-top: 30px;
`;
const LogoAnimation = keyframes`
  from {
    mask-position: 150%;
  }
  to {
    mask-position: -50%;
  }
`;

export const Logo = styled(motion.img)`
  mask-image: linear-gradient(
    -75deg,
    rgba(0, 0, 0, 0.6) 30%,
    #000 50%,
    rgba(0, 0, 0, 0.8) 70%
  );
  mask-size: 200%;
  animation: ${LogoAnimation} 2s infinite;
`;
