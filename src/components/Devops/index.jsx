import backgroundImageDevops from '@/assets/icons/backgroundDevops.png';
import { Container } from '@/components/Container';
import { devopsConfig } from '@/components/Devops/config';
import { Feature } from '@/components/Feature';

import * as S from './components';
import { salaries } from './config';

export const Devops = () => {
  return (
    <S.Section>
      <S.TitleWrapper>
        <S.Title>DevOps</S.Title>
        <S.Description>
          инженеры контролируют все этапы создания продукта:
          <br /> от написания кода до релиза. Помогают отделам разработки и
          администрирования, синхронизируют <br /> их усилия и автоматизируют технические
          процессы.
          <br /> За последние годы спрос на этих специалистов вырос <br /> в несколько раз.
          Мы поможем стать DevOps-инженером с нуля и найдём вам работу.
        </S.Description>
        <S.BackgroundTitle>DevOps</S.BackgroundTitle>
      </S.TitleWrapper>

      <Container>
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

        <S.ArticleTitle>Востребованность на рынке</S.ArticleTitle>

        <S.SalaryWrapper>
          <S.BackgroundFlash />

          <img src={backgroundImageDevops} alt="backgroundImage" />

          <S.SalaryTabletsWrapper>
            {salaries.map(({ salary, position }, i) => (
              <S.SalaryTablet index={i} key={salary}>
                <S.Salary index={i}>{salary}</S.Salary>
                <S.Position>{position}</S.Position>
              </S.SalaryTablet>
            ))}
          </S.SalaryTabletsWrapper>

          <S.VacanciesNote>* >2000 вакансийDevOps Engineer link hh.ru</S.VacanciesNote>
        </S.SalaryWrapper>
      </Container>
    </S.Section>
  );
};
