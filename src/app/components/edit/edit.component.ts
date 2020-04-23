import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BlogPost } from "src/app/interfaces/blogPost";
import { FakeData } from "src/assets/fakeBlogPosts";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  @Output() close = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    this.blogPosts = FakeData.blogPosts;
  }

  @Input() data: BlogPost;
  @Input() index: number;

  blogPosts: BlogPost[];

  closing() {
    this.close.emit("close");
  }

  savePost() {
    this.blogPosts[this.index] = this.data;
    this.closing();
  }
}
