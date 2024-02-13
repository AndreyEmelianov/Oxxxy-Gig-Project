import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Icon } from '../Icon/Icon';
import { MENU } from '../../app/constants';
import { Logo } from '../Logo/Logo';

export const MobileMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="menu-mobile">
      <div className="menu-mobile__btn" onClick={toggleMobileMenu}>
        <Icon name="round-menu" />
      </div>

      <nav className={`menu-mobile__list ${isOpen ? 'opened' : ''}`}>
        <Logo />

        <ul className="menu-mobile__items">
          {MENU.map(({ name, link }, index) => (
            <li className="menu-mobile__item">
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={`/${link}`}
                onClick={toggleMobileMenu}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="menu-mobile__btn" onClick={toggleMobileMenu}>
          <Icon name="round-close" />
        </div>
      </nav>
    </div>
  );
};
