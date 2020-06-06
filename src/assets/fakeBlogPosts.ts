import { BlogPost } from "src/app/interfaces/blogPost";

export class FakeData {
  static blogPosts: BlogPost[] = [
    {
      title: "Test title",
      intro: "Test Intro",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      image: {
        url: "https://picsum.photos/640/360",
        description: "Description of the image",
        alt: "Test picture",
        filename: "Test Picture",
      },
      author: {
        id: "12345",
        name: "Greg",
        avatar: "https://picsum.photos/48/48",
      },
      category: "Default",
      published: false,
      dateCreated: new Date(),
      datePublished: new Date(),
      lastModified: new Date(),
    },
    {
      title: "Test title 1",
      intro: "Test Intro",
      content: "This is test content for the blog posts",
      image: {
        url: "https://picsum.photos/640/360",
        description: "Description of the image",
        alt: "Test picture",
        filename: "Test Picture",
      },
      author: {
        id: "123456",
        name: "Austin",
        avatar: "https://picsum.photos/48/48",
      },
      category: "Fitness",
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
        url: "https://picsum.photos/640/360",
        description: "Description of the image",
        alt: "Test picture",
        filename: "Test Picture",
      },
      author: {
        id: "1234567",
        name: "Joey",
        avatar: "https://picsum.photos/48/48",
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
        url: "https://picsum.photos/640/360",
        description: "Description of the image",
        alt: "Test picture",
        filename: "Test Picture",
      },
      author: {
        id: "12345678",
        name: "William",
        avatar: "https://picsum.photos/48/48",
      },
      category: "Default",
      published: false,
      dateCreated: new Date(-2),
      datePublished: null,
      lastModified: new Date(),
    },
  ];
}
