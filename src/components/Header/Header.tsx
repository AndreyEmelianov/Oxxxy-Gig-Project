import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import { Logo } from '../Logo/Logo';
import { MENU } from '../../app/constants';
import { Socials } from '../Socials/Socials';

export const Header: FC = () => {
  return (
    <section className="header">
      <div className="container">
        <header>
          <Logo />
          <nav className="menu">
            {MENU.map(({ name, link }, index) => (
              <ScrollAnimation
                key={link}
                className="menu-item"
                animateIn="fadeInDown"
                delay={index * 100}
                offset={0}>
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={`/${link}`}>
                  {name}
                </NavLink>
              </ScrollAnimation>
            ))}
          </nav>
          <Socials />
        </header>
      </div>
    </section>
  );
};
