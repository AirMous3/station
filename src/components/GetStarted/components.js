import styled from 'styled-components/macro';

import star from '@/assets/icons/star.svg';
import { Button } from '@/components/Button';
import { ArticleTitle } from '@/components/Devops/components';

export const Section = styled.section`
  margin-top: 200px;
  margin-bottom: 100px;
`;

export const Article = styled(ArticleTitle)`
  position: absolute;
  top: -85px;
  left: 90px;
  line-height: 73px;
  text-align: center;
  margin: 0;

  @media (max-width: 450px) {
    line-height: 40px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

export const BackgroundFlash = styled.div`
  position: absolute;
  width: 326px;
  height: 361px;
  top: -50px;
  left: 243px;
  background: linear-gradient(180deg, #1f95b7 0%, #8123a2 100%);
  filter: blur(100px);
  transform: rotate(-38.18deg);
  z-index: -1;
`;

export const Image = styled.img`
  max-height: 528px;

  @media (max-width: 450px) {
    max-width: 270px;
  }
`;
