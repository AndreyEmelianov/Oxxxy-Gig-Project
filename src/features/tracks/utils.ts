export const tracksItemsCollectionQuery = `{
  trackCollection {
    items {
      date
      title
      link {
        url
      }
      cover {
        url
      }
      sys {
        id
      }
    }
  }
}`;
