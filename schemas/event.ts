export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Event Name',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'coverPhoto',
      title: 'Cover Photo',
      type: 'image',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short summary of the Ryan event',
    }
  ]
};
