export interface INewsItem {
  date: string;
  title: string;
  description?: string;
  cover: {
    url: string;
  };
  sys: {
    id: string;
  };
}

export interface INewsItemsCollection {
  items: INewsItem[];
}

export type SliderButtonType = 'prev' | 'next';
