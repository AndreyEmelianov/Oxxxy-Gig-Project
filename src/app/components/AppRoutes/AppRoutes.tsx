import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../../../components/HomePage/HomePage';
import { TourPage } from '../../../features/tours/components/TourPage/TourPage';
import { TracksPage } from '../../../features/tracks/components/TracksPage/TracksPage';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/tour" element={<TourPage />} />
      <Route path="/tracks" element={<TracksPage />} />
    </Routes>
  );
};
