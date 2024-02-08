export const newsItemsCollectionQuery = `{
  newsItemCollection {
    items {
      date
      title
      cover {
        url
      }
      sys {
        id
      }
    }
  }
}`;
