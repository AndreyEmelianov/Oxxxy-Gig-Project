import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../../../components/HomePage/HomePage';
import { TourPage } from '../../../features/tours/components/TourPage/TourPage';
import { TracksPage } from '../../../features/tracks/components/TracksPage/TracksPage';
import { NewsPage } from '../../../features/news/components/NewsPage/NewsPage';
import { SingleNews } from '../../../features/news/components/SingleNews/SingleNews';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/tour" element={<TourPage />} />
      <Route path="/tracks" element={<TracksPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:id" element={<SingleNews />} />
    </Routes>
  );
};
