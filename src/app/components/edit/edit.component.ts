import { Component, OnInit, Input } from "@angular/core";
import { BlogPost } from "src/app/interfaces/blogPost";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }

  @Input() data: BlogPost;
}
