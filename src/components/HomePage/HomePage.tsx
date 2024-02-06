import { FC } from 'react';

import { MainBanner } from '../MainBanner/MainBanner';
import { TourItems } from '../../features/tours/components/Tour/TourItems';

export const HomePage: FC = () => {
  return (
    <main className="main">
      <MainBanner />
      <TourItems />
    </main>
  );
};
