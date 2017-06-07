import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Frivillig } from "app/frivillig/frivillig.model";
import { FrivilligService } from "app/frivillig/frivillig.service";


@Component({
  selector: 'app-frivillig-crud',
  templateUrl: './frivillig-crud.component.html',
  styleUrls: ['./frivillig-crud.component.css']
})
export class FrivilligeCrudComponent implements OnInit {
  constructor(private FrivilligService: FrivilligService) { }
  selectedFeature : string;
  ngOnInit() {
  }
  onSelect(selected : string) {
    this.selectedFeature = selected;
  }
}
