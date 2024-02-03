import { FC } from 'react';

import { Icon } from '../Icon/Icon';
import { SOCIALS } from '../../app/constants';

export const Socials: FC = () => {
  return (
    <ul className="socials">
      {SOCIALS.map(({ icon, link }) => (
        <li key={link} title={icon} className="socials-item">
          <a href={link} target="__blank">
            <Icon name={icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};
