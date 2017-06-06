import { Component, OnInit, Input } from '@angular/core';
import { Frivillig } from "app/frivillig/frivillig.model";
import{ FrivilligService } from '../../frivillig.service';

@Component({
  selector: 'app-frivillig-item',
  templateUrl: './frivillig-item.component.html',
  styleUrls: ['./frivillig-item.component.css']
})
export class FrivilligItemComponent implements OnInit {
  @Input() frivillig : Frivillig;
  constructor(private frivilligService : FrivilligService) { }

  ngOnInit() {
  }
  onSelected() {
    this.frivilligService.frivilligSelected.emit(this.frivillig);
  }
}
