export interface INewsItem {
  date: string;
  title: string;
  description?: {
    json: any;
  };
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
