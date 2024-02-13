import { FC } from 'react';
import { renderNode } from '../../app/renderDescription';

export const AssetsHeading: FC = ({ content }: any) => {
  return <h3 className="news-heading-3">{content && content.map(renderNode)}</h3>;
};
