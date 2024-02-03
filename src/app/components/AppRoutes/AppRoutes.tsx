import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../../../components/HomePage/HomePage';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
};
