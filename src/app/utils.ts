import { MAIN_URL } from './constants';

export const request = async (query: string) => {
  try {
    const result = await fetch(MAIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await result.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getAssets = async (assetId: string) => {
  try {
    const url = `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/assets/${assetId}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`;

    const result = await fetch(url);
    const data = await result.json();

    const link = data?.fields?.file?.url;
    return link ? `https:${link}` : null;
  } catch (err) {
    console.error('no assets data');
  }
};

export const dateFormatterRuLocale = (date: string) => {
  return new Date(date).toLocaleDateString('ru-RU', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });
};
