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

export const newsItemQuery = (id: string) => `{
    newsItem(id: "${id}") {
      sys {
        id
      }
      title
      date
      cover {
        url
      }
      description {
        json
      }
    }
}`;
