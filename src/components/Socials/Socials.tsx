import { FC } from 'react';

import { Icon } from '../Icon/Icon';
import { SOCIALS } from '../../app/constants';

interface ISocialsProps {
  height?: string;
  width?: string;
}

export const Socials: FC<ISocialsProps> = ({ height = '', width = '' }) => {
  return (
    <ul className="socials">
      {SOCIALS.map(({ icon, link }) => (
        <li key={link} title={icon} className="socials-item">
          <a href={link} target="__blank">
            <Icon name={icon} height={height} width={width} />
          </a>
        </li>
      ))}
    </ul>
  );
};
