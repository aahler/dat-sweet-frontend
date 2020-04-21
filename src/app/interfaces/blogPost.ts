export interface BlogPost {
  title: string;
  intro: string;
  content: string;
  image: {
    url: string;
    description: string;
    alt: string;
    filename: string;
  };
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  category: string;
  published: boolean;
  dateCreated: Date;
  datePublished: Date;
  lastModified: Date;
}
