import { FC } from 'react';

import { SectionMotion } from '../../../../components/SectionMotion/SectionMotion';
import tourVideo from '../../../../images/oxxxytour.mp4';

export const TourBanner: FC = () => {
  return (
    <SectionMotion className="tour-banner">
      <div className="container">
        <video loop muted autoPlay>
          <source src={tourVideo} type="video/mp4" />
        </video>
      </div>
    </SectionMotion>
  );
};
