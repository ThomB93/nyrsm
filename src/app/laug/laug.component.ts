import { Component, OnInit } from '@angular/core';
import { Laug } from "app/laug/laug.model";
import { LaugService } from "./laug.service";

@Component({
  selector: 'app-laug',
  templateUrl: './laug.component.html',
  styleUrls: ['./laug.component.css']
})
export class LaugComponent implements OnInit {
  selectedLaug: Laug;
  constructor(private laugService: LaugService) { }

  ngOnInit() {
    this.laugService.laugSelected
      .subscribe(
      (laug: Laug) => {this.selectedLaug = laug;
      });
  }
}
