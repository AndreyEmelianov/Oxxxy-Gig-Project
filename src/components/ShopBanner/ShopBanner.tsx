import { FC } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import { SectionMotion } from '../SectionMotion/SectionMotion';
import logoImg from '../../images/oxxxyshop.webp';
import bannerImg from '../../images/banner.webp';

export const ShopBanner: FC = () => {
  return (
    <SectionMotion className="shop-banner__section">
      <div className="container">
        <div className="shop-banner__wrapper">
          <Link className="shop-banner" to="/shop">
            <ScrollAnimation
              animateIn="fadeInRight"
              animateOut="fadeOutRight"
              className="shop-banner__text">
              <p className="shop-banner__subtitle">ОБНОВЛЕННЫЙ МЕРЧ ОТ ОКСИМИРОНА</p>
              <p className="shop-banner__title">OXXXYSHOP 2.0</p>
            </ScrollAnimation>
            <ScrollAnimation
              className="shop-banner__logo"
              animateIn="fadeInRight"
              animateOut="fadeOutRight">
              <img className="shop-logo" src={logoImg} alt="Логотип oxxxyshop" />
            </ScrollAnimation>
            <ScrollAnimation
              className="shop-banner__image"
              animateIn="fadeInRight"
              animateOut="fadeOutRight">
              <img src={bannerImg} alt="баннер изображение oxxxymiron" />
            </ScrollAnimation>
          </Link>
        </div>
      </div>
    </SectionMotion>
  );
};
