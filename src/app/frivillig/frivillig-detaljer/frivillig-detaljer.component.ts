import { Component, OnInit, Input } from '@angular/core';
import { Frivillig } from '../frivillig.model';
import{ FrivilligService } from '../frivillig.service';

@Component({
  selector: 'app-frivillig-detaljer',
  templateUrl: './frivillig-detaljer.component.html',
  styleUrls: ['./frivillig-detaljer.component.css']
})
export class FrivilligDetaljerComponent implements OnInit {

  @Input() frivillig : Frivillig;

  constructor(private frivilligService: FrivilligService) { }

  ngOnInit() {
  }

}

