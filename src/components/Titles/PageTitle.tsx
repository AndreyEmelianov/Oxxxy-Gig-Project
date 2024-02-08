import { FC } from 'react';

interface IPageTitleProps {
  text: string;
  className?: string;
}

export const PageTitle: FC<IPageTitleProps> = ({ text, className }) => {
  return <h1 className={`page-title ${className}`}>{text}</h1>;
};
