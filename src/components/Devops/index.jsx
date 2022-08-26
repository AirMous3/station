import backgroundImageDevops from '@/assets/icons/backgroundDevops.png';
import { Container } from '@/components/Container';
import { devopsConfig } from '@/components/Devops/config';
import { Feature } from '@/components/Feature';
import { SalaryTablet } from '@/components/SalaryTablet';

import * as S from './components';

export const Devops = () => {
  return (
    <S.Section>
      <S.TitleWrapper>
        <S.Title>DevOps</S.Title>
        <S.Description>
          инженеры контролируют все этапы создания продукта: от написания кода до релиза.
          Помогают отделам разработки и администрирования, синхронизируют их усилия и
          автоматизируют технические процессы. За последние годы спрос на этих
          специалистов вырос в несколько раз. Мы поможем стать DevOps-инженером с нуля и
          найдём вам работу.
        </S.Description>
        <S.BackgroundTitle>DevOps</S.BackgroundTitle>
      </S.TitleWrapper>

      <Container>
        <div>
          <S.ArticleTitle>Как это будет</S.ArticleTitle>

          <S.FeaturesWrapper>
            {devopsConfig.map(({ number, title, description }) => (
              <Feature
                key={number}
                number={number}
                title={title}
                description={description}
              />
            ))}
          </S.FeaturesWrapper>
        </div>

        <S.SalaryWrapper>
          <S.ArticleTitle>Востребованность на рынке</S.ArticleTitle>
          {/*<img src={backgroundImageDevops} alt="backgroundImage" />*/}
          <S.SalaryTabletsWrapper>
            <SalaryTablet />
          </S.SalaryTabletsWrapper>
        </S.SalaryWrapper>
      </Container>
    </S.Section>
  );
};
