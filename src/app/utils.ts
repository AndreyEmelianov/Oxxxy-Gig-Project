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

export const dateFormatterRuLocale = (date: string) => {
  return new Date(date).toLocaleDateString('ru-RU', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });
};
