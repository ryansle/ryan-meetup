import client from '@/data/contentful';

const fetchEvents = async () => {
  // @ts-ignore
  const data = await client.getEntries(({ content_type: 'event', order: 'sys.createdAt' }));

  return data.items.map((entry) => entry.fields);
};

const fetchFAQs = async () => {
  const data = await client.getEntries(({ content_type: 'faq' }));

  return data.items.map((entry) => entry.fields).reverse();
};

const fetchArticles = async () => {
  // @ts-ignore
  const data = await client.getEntries(({ content_type: 'article', order: '-sys.createdAt' }));

  return data.items.map((entry) => entry.fields);
};

const fetchMedia = async () => {
  const data = await client.getEntries(({ content_type: 'gallery' }));

  return data.items;
};

const fetchSingleMediaEvent = async (id: string) => {
  const data = await client.getEntry(id);

  return data.fields;
};

const fetchLocations = async () => {
  const data = await client.getEntries(({ content_type: 'locations' }));

  return data.items.map((entry) => entry.fields);
};

export {
  fetchEvents,
  fetchFAQs,
  fetchArticles,
  fetchMedia,
  fetchSingleMediaEvent,
  fetchLocations,
};