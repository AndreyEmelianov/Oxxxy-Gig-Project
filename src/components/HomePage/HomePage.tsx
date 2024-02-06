import { FC } from 'react';

import { MainBanner } from '../MainBanner/MainBanner';
import { TourItems } from '../../features/tours/components/Tour/TourItems';
import { TourBanner } from '../../features/tours/components/TourBanner/TourBanner';

export const HomePage: FC = () => {
  return (
    <main className="main">
      <MainBanner />
      <TourItems />
      <TourBanner />
    </main>
  );
};
