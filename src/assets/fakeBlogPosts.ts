import { BlogPost } from "src/app/interfaces/blogPost";

export class FakeData {
  static blogPosts: BlogPost[] = [
    {
      title: "Test title",
      intro: "Test Intro",
      content: "This is test content for the blog posts",
      image: {
        url: "",
        description: "Description of the image",
        alt: "Test picture",
        filename: "Test Picture",
      },
      author: {
        id: "12345",
        name: "Greg",
        avatar: "",
      },
      category: "Default",
      published: true,
      dateCreated: new Date(),
      datePublished: new Date(),
      lastModified: new Date(),
    },
    {
      title: "Test title 1",
      intro: "Test Intro",
      content: "This is test content for the blog posts",
      image: {
        url: "",
        description: "Description of the image",
        alt: "Test picture",
        filename: "Test Picture",
      },
      author: {
        id: "123456",
        name: "Austin",
        avatar: "",
      },
      category: "Default",
      published: true,
      dateCreated: new Date(),
      datePublished: new Date(),
      lastModified: new Date(),
    },
    {
      title: "Test title 2",
      intro: "Test Intro",
      content: "This is test content for the blog posts",
      image: {
        url: "",
        description: "Description of the image",
        alt: "Test picture",
        filename: "Test Picture",
      },
      author: {
        id: "1234567",
        name: "Joey",
        avatar: "",
      },
      category: "Default",
      published: true,
      dateCreated: new Date(),
      datePublished: new Date(),
      lastModified: new Date(),
    },
    {
      title: "Test title 3",
      intro: "Test Intro",
      content: "This is test content for the blog posts",
      image: {
        url: "",
        description: "Description of the image",
        alt: "Test picture",
        filename: "Test Picture",
      },
      author: {
        id: "12345678",
        name: "William",
        avatar: "",
      },
      category: "Default",
      published: true,
      dateCreated: new Date(),
      datePublished: new Date(),
      lastModified: new Date(),
    },
  ];
}
