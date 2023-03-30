import client from '@/data/contentful';

const fetchEvents = async () => {
  const data = await client.getEntries(({ content_type: 'event', order: 'sys.createdAt' }));

  return data.items.map((entry) => entry.fields);
};

const fetchFAQs = async () => {
  const data = await client.getEntries(({ content_type: 'faq' }));

  return data.items.map((entry) => entry.fields).reverse();
};

const fetchArticles = async () => {
  const data = await client.getEntries(({ content_type: 'article', order: 'sys.createdAt' }));

  return data.items.map((entry) => entry.fields);
};

export {
  fetchEvents,
  fetchFAQs,
  fetchArticles
};