import { FC } from 'react';

import { Header } from '../../../components/Header/Header';
import { AppRoutes } from '../AppRoutes/AppRoutes';
import { Footer } from '../../../components/Footer/Footer';

import '../../styles/index.scss';

export const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};
