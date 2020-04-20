import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  date: Date = new Date();
  blogPosts: BlogPost[] = [
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
      dateCreated: this.date,
      datePublished: this.date,
      lastModified: this.date,
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
      dateCreated: this.date,
      datePublished: this.date,
      lastModified: this.date,
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
      dateCreated: this.date,
      datePublished: this.date,
      lastModified: this.date,
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
      dateCreated: this.date,
      datePublished: this.date,
      lastModified: this.date,
    },
  ];
}

interface PageContent {
  title: string;
  section: string;
  content: {
    image: boolean;
    text: string;
  };
}

interface BlogPost {
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
