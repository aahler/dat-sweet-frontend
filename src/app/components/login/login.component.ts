import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  login() {
    console.log(this.username);
    console.log(this.password);
    this.router.navigate(["/home"]);
  }

  reset() {
    this.username = "";
    this.password = "";
  }
}
