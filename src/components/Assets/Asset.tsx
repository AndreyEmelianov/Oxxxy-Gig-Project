import { FC, useEffect, useState } from 'react';

import { getAssets } from '../../app/utils';

interface AssetProps {
  id: string;
}

export const Asset: FC<AssetProps> = ({ id }) => {
  const [asset, setAsset] = useState<null | undefined | string>(null);

  useEffect(() => {
    const fetchAsset = async () => {
      const item = await getAssets(id);

      setAsset(item);
    };
    fetchAsset();
  }, [id]);

  return asset ? <img src={asset} alt="" /> : <></>;
};
