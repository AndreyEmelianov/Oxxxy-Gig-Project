import { FC } from 'react';
import { renderNode } from '../../app/renderDescription';

interface AssetsLinkProps {
  uri: string;
  content: any;
}

export const AssetsLink: FC<AssetsLinkProps> = ({ uri, content }) => {
  return (
    <a href={uri} target="_blank" rel="noopener noreferrer">
      {content && content.map(renderNode)}
    </a>
  );
};
