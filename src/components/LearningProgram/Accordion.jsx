import React, { useState } from 'react';

import { PRESERVE } from '@/constants/framer';

import * as S from './components';

export const Accordion = ({ courseFeatures }) => {
  const [isOpenDescription, setIsOpenDescription] = useState(1);

  return courseFeatures.map(({ featureTitle, featureDescription, id }) => {
    const active = isOpenDescription === id;
    return (
      <S.CourseFeatureWrapper
        layout={PRESERVE}
        key={id}
        transition={{ duration: 0.01 }}
      >
        <S.FeatureTitleWrapper layout={PRESERVE}>
          <S.CourseFeatureTitle layout={PRESERVE}>
            {featureTitle}
          </S.CourseFeatureTitle>

          {featureDescription && (
            <S.CourseCross
              layout={PRESERVE}
              animate={
                active
                  ? { rotate: 135, transition: { duration: 0.5 } }
                  : { rotate: 0, transition: { duration: 0.5 } }
              }
              onClick={() => setIsOpenDescription(active ? undefined : id)}
            />
          )}
        </S.FeatureTitleWrapper>

        {active && (
          <S.CourseFeatureDescription
            layout={PRESERVE}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {featureDescription}
          </S.CourseFeatureDescription>
        )}
      </S.CourseFeatureWrapper>
    );
  });
};
