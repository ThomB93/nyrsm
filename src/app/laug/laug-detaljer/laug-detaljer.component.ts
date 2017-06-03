import { Component, OnInit, Input } from '@angular/core';
import { Laug } from "app/laug/laug.model";

@Component({
  selector: 'app-laug-detaljer',
  templateUrl: './laug-detaljer.component.html',
  styleUrls: ['./laug-detaljer.component.css']
})
export class LaugDetaljerComponent implements OnInit {
  @Input() laug : Laug;
  constructor() { }

  ngOnInit() {
  }

}