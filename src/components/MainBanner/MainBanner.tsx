import { FC } from 'react';

import bannerVideo from '../../images/text.webm';
import { SectionMotion } from '../SectionMotion/SectionMotion';

export const MainBanner: FC = () => {
  return (
    <SectionMotion>
      <div className="container">
        <h1 style={{ fontSize: 0, lineHeight: 0 }}>Oxxxymiron</h1>
        <div className="banner">
          <video className="banner-video" width={1000} height={'auto'} loop muted autoPlay>
            <source src={bannerVideo} type="video/webm" />
          </video>
        </div>
      </div>
    </SectionMotion>
  );
};
