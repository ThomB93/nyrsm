import { Component, OnInit } from '@angular/core';
import { Frivillig } from "app/frivillig/frivillig.model";
import{ FrivilligService } from './frivillig.service';

@Component({
  selector: 'app-frivillig',
  templateUrl: './frivillig.component.html',
  styleUrls: ['./frivillig.component.css']
})
export class FrivilligComponent implements OnInit {
  selectedFrivillig : Frivillig;
  constructor(private frivilligService : FrivilligService) { }

  ngOnInit() {
    this.frivilligService.frivilligSelected
      .subscribe(
        (frivillig: Frivillig) => {
          this.selectedFrivillig = frivillig;
        }
      );
  }
}
