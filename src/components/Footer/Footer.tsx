import { FC } from 'react';

import { FooterForm } from './FooterForm';
import { Logo } from '../Logo/Logo';
import { Socials } from '../Socials/Socials';

export const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <FooterForm />
          <div className="footer-info">
            <Logo />
            <p>OXXXYMIRON, {year}</p>
          </div>
          <Socials width={'24'} height={'24'} />
        </div>
      </div>
    </footer>
  );
};
