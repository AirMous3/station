import React, { useState } from 'react';

import * as S from './components';

export const Accordion = ({ courseFeatures }) => {
  const [isOpenDescription, setIsOpenDescription] = useState();

  return courseFeatures.map(({ featureTitle, featureDescription, id }) => {
    const active = isOpenDescription === id;
    return (
      <S.CourseFeatureWrapper layout="preserve" key={id} transition={{ duration: 0.01 }}>
        <S.FeatureTitleWrapper layout="preserve">
          <S.CourseFeatureTitle layout="preserve">{featureTitle}</S.CourseFeatureTitle>

          {featureDescription && (
            <S.CourseCross
              layout="preserve"
              onClick={() => setIsOpenDescription(active ? undefined : id)}
            />
          )}
        </S.FeatureTitleWrapper>

        {active && (
          <S.CourseFeatureDescription
            layout="preserve"
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
