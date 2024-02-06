export interface ITourItem {
  city: string;
  county: string;
  place: string;
  date: string;
  soldOut: boolean;
  sys: {
    id: string;
  };
  ticketLink: string | null;
  videoLink: string | null;
}

export interface IToursItemsCollection {
  items: ITourItem[];
}
