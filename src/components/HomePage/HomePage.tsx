import { FC } from 'react';

import { MainBanner } from '../MainBanner/MainBanner';
import { TourItems } from '../../features/tours/components/Tour/TourItems';
import { TourBanner } from '../../features/tours/components/TourBanner/TourBanner';
import { Tracks } from '../../features/tracks/components/Tracks/Tracks';
import { ShopBanner } from '../ShopBanner/ShopBanner';
import { News } from '../../features/news/components/News/News';

export const HomePage: FC = () => {
  return (
    <main className="main">
      <MainBanner />
      <TourItems />
      <TourBanner />
      <Tracks />
      <ShopBanner />
      <News />
    </main>
  );
};
