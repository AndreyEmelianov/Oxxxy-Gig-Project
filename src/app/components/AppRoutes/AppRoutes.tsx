import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../../../components/HomePage/HomePage';
import { TourPage } from '../../../features/tours/components/TourPage/TourPage';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/tour" element={<TourPage />} />
    </Routes>
  );
};
