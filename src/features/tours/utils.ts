import { ITourItem } from './types';

export const toursItemsCollectionQuery = `{
  tourItemCollection {
    items {
      date
      place
      city
      soldOut
      county
      ticketLink
      videoLink
      sys {
        id
      }
    }
  }
}`;

export const sortTourByDate = (arr: ITourItem[]) => {
  return arr.sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date)));
};
