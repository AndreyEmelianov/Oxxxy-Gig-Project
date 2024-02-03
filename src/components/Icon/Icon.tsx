import { FC } from 'react';

interface IIconProps {
  name: string;
  width?: string;
  height?: string;
}

export const Icon: FC<IIconProps> = ({ name, width, height }) => {
  return (
    <svg className={`icon icon-${name}`} style={{ width, height }}>
      <use xlinkHref={`${process.env.PUBLIC_URL}/images/sprite.svg#${name}`} />
    </svg>
  );
};
