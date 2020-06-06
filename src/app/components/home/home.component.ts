import { Component, OnInit } from "@angular/core";
import { BlogPost } from "src/app/interfaces/blogPost";
import { FakeData } from "src/assets/fakeBlogPosts";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  blogPosts: BlogPost[];
  allBlogPosts: BlogPost[];
  data: BlogPost = null;
  opened: boolean = false;
  status: boolean = false;
  index: number;
  categories: string[] = [];

  delete(i: BlogPost) {
    const index = this.blogPosts.indexOf(i, 0);
    if (index > -1) {
      this.blogPosts.splice(index, 1);
    }
  }

  clickEvent() {
    this.status = !this.status;
  }

  filter(category) {
    if (category === "All") {
      this.blogPosts = this.allBlogPosts;
    } else {
      this.blogPosts = this.allBlogPosts.filter((x) => x.category == category);
    }
  }

  openModal() {
    this.opened = !this.opened;
  }

  edit(i: BlogPost, e: number) {
    this.data = i;
    this.index = e;
    this.openModal();
  }

  setCategories() {
    this.allBlogPosts.map((x) => {
      return this.categories.includes(x.category)
        ? null
        : this.categories.push(x.category);
    });
  }

  setBlogPosts() {
    this.allBlogPosts = FakeData.blogPosts;
    this.blogPosts = this.allBlogPosts;
    this.setCategories();
  }

  ngOnInit(): void {
    this.setBlogPosts();
  }
}

interface PageContent {
  title: string;
  section: string;
  content: {
    image: boolean;
    text: string;
  };
}
