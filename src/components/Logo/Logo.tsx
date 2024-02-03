import { FC } from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../images/logo.webp';

export const Logo: FC = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={LogoImg} alt="Логотип оксимирон" />
      </Link>
    </div>
  );
};
