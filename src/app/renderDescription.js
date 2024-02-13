import { Asset } from '../components/Assets/Asset';
import { AssetsHeading } from '../components/Assets/AssetsHeading';
import { AssetsLink } from '../components/Assets/AssetsLink';
import { AssetsText } from '../components/Assets/AssetsText';

export const renderNode = ({ nodeType, data, value, content }, i) => {
  const key = `${nodeType}${i}`;

  switch (nodeType) {
    case 'paragraph':
      return <p key={key}>{content.map(renderNode)}</p>;

    case 'text':
      return <AssetsText key={key} value={value} />;

    case 'heading-3':
      return <AssetsHeading key={key} content={content} />;

    case 'embedded-asset-block':
      return <Asset key={key} id={data.target.sys.id} />;

    case 'hyperlink':
      return <AssetsLink key={key} uri={data.uri} content={content} />;

    default:
      break;
  }

  return Array.isArray(content) ? content.map(renderNode) : null;
};

export const convertJsonToText = ({ content }) => {
  return content.map(renderNode);
};
