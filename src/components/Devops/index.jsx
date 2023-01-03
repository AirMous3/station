import backgroundImageDevops from '@/assets/images/backgroundDevops.png';
import { Container } from '@/components/Container';
import { Feature } from '@/components/Devops/Feature';
import { devopsConfig } from '@/components/Devops/config';
import { HIDDEN, VISIBLE } from '@/constants/framer';

import * as S from './components';
import { salaries } from './config';

export const Devops = () => {
  const titleAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };
  const descriptionAnimation = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  const articleAnimation = {
    hidden: {
      opacity: 0,
      x: -600,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  const secondArticleAnimation = {
    hidden: {
      opacity: 0,
      x: -600,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2.5,
      },
    },
  };

  // const salaryTabletAnimation = {
  //   hidden: {
  //     height: '10px',
  //   },
  //   visible: (custom) => ({
  //     opacity: 1,
  //     height: '100%',
  //     transition: {
  //       duration: custom + 1,
  //     },
  //   }),
  // };
  //
  // const salaryAnimation = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   visible: (margin) => ({
  //     opacity: 1,
  //     margin,
  //     transition: {
  //       duration: 3,
  //       delay: 5,
  //     },
  //   }),
  // };

  return (
    <S.Section initial={HIDDEN} whileInView={VISIBLE} viewport={{ once: true }}>
      <Container>
        <S.TitleWrapper>
          <S.Title variants={titleAnimation}>DevOps</S.Title>
          <S.Description variants={descriptionAnimation}>
            инженер — кто это и какие у него обязанности? Простыми словами, это
            человек, который синхронизирует этапы разработки программного
            продукта и помогает автоматизировать рабочие процессы. DevOps — это
            много профессий в одном человеке: админ, разработчик, тестировщик и
            менеджер. Это относительно новое направление: сейчас компании
            находятся на этапе понимания необходимости такого человека в
            команде, поэтому спрос на DevOps-специалистов растёт с каждым днём.
            После обучения на курсе вы сможете стать DevOps-инженером, а также
            найти высокооплачиваемую работу.
          </S.Description>
          <S.BackgroundTitle>DevOps</S.BackgroundTitle>
          <S.BackgroundFlash />
        </S.TitleWrapper>

        <S.ArticleTitle variants={articleAnimation}>
          Как это будет
        </S.ArticleTitle>

        <S.FeaturesWrapper>
          {devopsConfig.map(
            ({ number, title, description, maxWidth, textAlign, custom }) => (
              <Feature
                key={number}
                number={number}
                title={title}
                description={description}
                maxWidth={maxWidth}
                textAlign={textAlign}
                custom={custom}
              />
            ),
          )}
        </S.FeaturesWrapper>

        <S.ArticleTitle variants={secondArticleAnimation}>
          Востребованность на рынке
        </S.ArticleTitle>

        <S.SalaryWrapper>
          <S.BackgroundFlashSecond />

          <S.BackgroundImage
            src={backgroundImageDevops}
            alt="backgroundImage"
          />

          <S.SalaryTabletsWrapper>
            {salaries.map(({ salary, position }, i) => (
              <S.SalaryTablet index={i} key={salary}>
                <S.Salary index={i}>{salary}</S.Salary>
                <S.Position>{position}</S.Position>
              </S.SalaryTablet>
            ))}
          </S.SalaryTabletsWrapper>

          <S.VacanciesNote>
            * >2000 вакансийDevOps Engineer link hh.ru
          </S.VacanciesNote>
        </S.SalaryWrapper>
      </Container>
    </S.Section>
  );
};
