import { Component, OnInit } from '@angular/core';
import { Laug } from "app/laug/laug.model";
import {LaugService} from "../laug.service";

@Component({
  selector: 'app-laug-kort',
  templateUrl: './laug-kort.component.html',
  styleUrls: ['./laug-kort.component.css']
})
export class LaugKortComponent implements OnInit {
  laugs : Laug[] = this.laugService.laugs;

  constructor(private laugService:LaugService) { }

  ngOnInit() {
  }

  skibSelected() {
    console.log("skib selected"); //test log
    this.laugService.laugSelected.emit(this.laugs[0]);
  }
  smedSelected() {
    this.laugService.laugSelected.emit(this.laugs[1]);
  }
  kirkeSelected() {
    this.laugService.laugSelected.emit(this.laugs[2]);
  }
  moelleSelected() {
    this.laugService.laugSelected.emit(this.laugs[3]);
  }
}
