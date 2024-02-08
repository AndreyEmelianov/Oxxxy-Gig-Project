import { FC } from 'react';

import loaderImg from '../../images/loader.webp';

export const Loader: FC = () => {
  return (
    <div className="loader">
      <img src={loaderImg} alt="изображение загрузки" />
    </div>
  );
};
