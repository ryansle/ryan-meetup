// #region Contentful Types
type ContentfulSys = {
  id: string;
  type: string;
  linkType: string;
}

type ContentfulFile = {
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

type ContentfulImage = {
  fields: {
    title: string;
    description: string;
    file: ContentfulFile;
  }
  metaData: {
    tags: string[]
  }
  sys: {
    createdAt: string;
    environment: {
      sys: ContentfulSys;
    }
  }
  id: string;
  locale: string;
  revision: number;
  space: {
    sys: ContentfulSys;
    type: string;
    updatedAt: string;
  }
}
// #endregion

// #region Ryan Meetup Types
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
  new: boolean;
}

type MediaEvent = {
  title: string;
  description: string;
  date: Date;
  bgImage: ContentfulImage;
  photos: ContentfulImage[];
}

type RyanPhoto = {
  fields: {
    file: ContentfulFile;
    title: string;
  };
  metaData: {
    tags: string[];
  };
  sys: {
    createdAt: Date;
    environment: {
      sys: ContentfulSys;
    }
    id: string;
    locale: string;
    revision: number;
    space: {
      sys: ContentfulSys
    }
    type: string;
    updatedAt: Date;
  }
}
// #endregion

// #region Mailerlite Types
type MailerParams = {
  email: string;
  groups: string[];
  status: 'active' | 'unsubscribed' | 'unconfirmed' | 'bounced' | 'junk';
  subscribed_at: string;
}
// #endregion

export type {
  RyanEvent,
  FrequentlyAskedQuestion,
  Article,
  MediaEvent,
  RyanPhoto,
  MailerParams,
};
