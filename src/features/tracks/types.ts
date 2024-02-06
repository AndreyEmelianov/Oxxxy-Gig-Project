export interface ITrackItem {
  date: string;
  title: string;
  link: {
    url: string;
  };
  cover: {
    url: string;
  };
  sys: {
    id: string;
  };
}

export interface ITracksItemsCollection {
  items: ITrackItem[];
}
