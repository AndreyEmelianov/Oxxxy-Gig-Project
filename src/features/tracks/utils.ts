export const tracksItemsCollectionQuery = `{
  trackCollection {
    items {
      date
      title
      descriptionn
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
