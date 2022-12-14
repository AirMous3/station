import { motion } from 'framer-motion';
import { useState } from 'react';

import { FEATURE_DESCRIPTION_ANIMATION } from '@/components/AboutTraining/animations';
import * as S from '@/components/AboutTraining/components';
import { trainingFeaturesConfig } from '@/components/AboutTraining/config';
import { HIDDEN, PRESERVE, VISIBLE } from '@/constants/framer';

export const AboutTrainingMobile = () => {
  const [isOpenDescription, setIsOpenDescription] = useState();

  const handleClick = (id) => {
    setIsOpenDescription(id);
  };
  return trainingFeaturesConfig.map(({ number, title, description }) => {
    const active = isOpenDescription === number;
    return (
      <S.Feature
        key={number}
        layout={PRESERVE}
        initial={HIDDEN}
        animate={VISIBLE}
        onClick={() => handleClick(active ? undefined : number)}
      >
        <motion.div
          layout={PRESERVE}
          style={{ display: 'flex', alignItems: 'center', width: '100%' }}
        >
          <S.FeatureTitle layout={PRESERVE} number={number}>
            {title}
          </S.FeatureTitle>

          <S.CrossWrapper layout={PRESERVE}>
            <S.Cross
              layout={PRESERVE}
              animate={active ? { y: -10, rotate: 125 } : { y: 0, rotate: 0 }}
              exit={{ y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleClick(active ? undefined : number)}
            />
          </S.CrossWrapper>
        </motion.div>
        {active && (
          <S.FeatureDescription
            layout={PRESERVE}
            variants={FEATURE_DESCRIPTION_ANIMATION}
          >
            {description}
          </S.FeatureDescription>
        )}
      </S.Feature>
    );
  });
};
