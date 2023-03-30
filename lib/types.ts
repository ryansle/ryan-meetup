type ContentfulImage = {
  fields: {
    title: string;
    description: string;
    file: {
      contentType: string;
      details: {
        image: {
          height: number;
          width: number;
        }
        size: number;
      }
      fileName: string;
      url: string;
    }
  },
  metaData: {
    tags: string[]
  }
  sys: {
    createdAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      }
    }
  }
  id: string;
  locale: string;
  revision: number;
  space: {
    sys: {
      type: string;
      linkType: string;
      id: string;
    }
    type: string;
    updatedAt: string;
  }
}

type RyanEvent = {
  active: boolean;
  coverImage: ContentfulImage;
  description: string;
  href: string;
  title: string;
  date: Date;
  city: string;
  location: string;
  venue: string;
}

type FrequentlyAskedQuestion = {
  question: string;
  answer: string;
}

type Article = {
  title: string;
  author: string;
  outlet: string;
  href: string;
  publishDate: Date;
  thumbnail: ContentfulImage;
}

export type {
  RyanEvent,
  FrequentlyAskedQuestion,
  Article,
};
