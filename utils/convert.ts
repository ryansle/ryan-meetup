// Types
import type { ContentfulImage } from '@/lib/types';

const convertDateToDateTimeString = (date: Date) => {
  const dateObject = new Date(date);

  const dateString = dateObject.toDateString();
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();
  const hour = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  return `${dateString.slice(0, 3)}, ${dateString.slice(4, 8)} ${day} ${year}`;
};


const convertImageUrl = (object: ContentfulImage) => {
  const url = object?.fields.file.url;

  return `https://${url.replace('//', '')}`;
};

export { convertDateToDateTimeString, convertImageUrl };