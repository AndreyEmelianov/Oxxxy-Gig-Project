import { FC } from 'react';

export const AssetsText: FC = ({ value }: any) => {
  return <span dangerouslySetInnerHTML={{ __html: value.replaceAll('\n\n', '<br />') }} />;
};
