import client from '@/data/contentful';

const fetchEvents = async () => {
  const data = await client.getEntries(({ content_type: 'event', order: 'sys.createdAt' }));

  return data.items.map((entry) => entry.fields);
};

export { fetchEvents };