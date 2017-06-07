import { Component, OnInit } from '@angular/core';
import { Laug } from "app/laug/laug.model";
import {LaugService} from "../laug.service";

@Component({
  selector: 'app-laug-kort',
  templateUrl: './laug-kort.component.html',
  styleUrls: ['./laug-kort.component.css']
})
export class LaugKortComponent implements OnInit {
  laugs : any[]; //rå JSON
  modelLaugs : Laug[] = []; //mappet JSON

  constructor(private laugService:LaugService) { }

  ngOnInit() {
    this.laugService.getAllLaug().subscribe(laug => {
      this.laugs = laug; //save posts in array
      for (var i = 0; i < this.laugs.length; i++) {//map JSON til Laug objekter
        this.modelLaugs.push(new Laug(this.laugs[i].navn, this.laugs[i].beskrivelse, this.laugs[i].imagePath)); 
      }
    });
  }
  //Udsend valgte laug på kortet vha. index
  skibSelected() {
    this.laugService.laugSelected.emit(this.modelLaugs[0]);
  }
  smedSelected() {
    this.laugService.laugSelected.emit(this.modelLaugs[1]);
  }
  moelleSelected() {
    this.laugService.laugSelected.emit(this.modelLaugs[2]);
  }
  kirkeSelected() {
    this.laugService.laugSelected.emit(this.modelLaugs[3]);
  }
  
}
