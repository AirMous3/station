import { useMediaQuery } from 'react-responsive';

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

  const isLaptop = useMediaQuery({ query: '(max-width: 560px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' });

  return (
    <S.Section initial={HIDDEN} whileInView={VISIBLE} viewport={{ once: true }}>
      <Container>
        <S.TitleWrapper>
          <S.Title variants={titleAnimation}>DevOps</S.Title>
          <S.Description variants={descriptionAnimation}>
            {!isMobile &&
              'инженер — кто это и какие у него обязанности? Простыми словами, это\n' +
                '            человек, который синхронизирует этапы разработки программного\n' +
                '            продукта и помогает автоматизировать рабочие процессы. DevOps — это\n' +
                '            много профессий в одном человеке: админ, разработчик, тестировщик и\n' +
                '            менеджер. Это относительно новое направление: сейчас компании\n' +
                '            находятся на этапе понимания необходимости такого человека в\n' +
                '            команде, поэтому спрос на DevOps-специалистов растёт с каждым днём.\n' +
                '            После обучения на курсе вы сможете стать DevOps-инженером, а также\n' +
                '            найти высокооплачиваемую работу.'}

            {isMobile &&
              'инженеры контролируют все этапы создания продукта: \n' +
                'от написания кода до релиза. Помогают отделам разработки и администрирования, синхронизируют \n' +
                'их усилия и автоматизируют технические процессы. \n' +
                'За последние годы спрос на этих специалистов вырос \n' +
                'в несколько раз. Мы поможем стать DevOps-инженером \n' +
                'с нуля и найдём вам работу. '}
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

        {!isLaptop && (
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
        )}
      </Container>
      {isLaptop && (
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
      )}
    </S.Section>
  );
};
