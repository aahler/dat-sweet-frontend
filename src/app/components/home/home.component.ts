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
  data: BlogPost = null;
  opened: boolean = false;
  index: number;

  delete(i: BlogPost) {
    const index = this.blogPosts.indexOf(i, 0);
    if (index > -1) {
      this.blogPosts.splice(index, 1);
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

  ngOnInit(): void {
    this.blogPosts = FakeData.blogPosts;
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
