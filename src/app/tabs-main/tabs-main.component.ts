import { Component, OnInit } from "@angular/core";
import data from "../../assets/data/data.json";
@Component({
  selector: "app-tabs-main",
  templateUrl: "./tabs-main.component.html",
  styleUrls: ["./tabs-main.component.css"]
})
export class TabsMainComponent implements OnInit {
  data;
  constructor() {}

  ngOnInit() {
    this.data = data;
  }
}
