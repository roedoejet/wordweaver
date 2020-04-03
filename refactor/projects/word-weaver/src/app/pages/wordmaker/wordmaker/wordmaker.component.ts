import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "ww-wordmaker",
  templateUrl: "./wordmaker.component.html",
  styleUrls: ["./wordmaker.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordmakerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
