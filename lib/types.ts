type RyanEvent = {
  active: boolean;
  coverImage: {
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
  description: string;
  href: string;
  title: string;
  date: Date;
  city: string;
  location: string;
  venue: string;
}

export type { RyanEvent };
