import { Component, OnInit } from '@angular/core';
import { Frivillig } from '../frivillig.model';
import{ FrivilligService } from '../frivillig.service';

@Component({
  selector: 'app-frivillig-liste',
  templateUrl: './frivillig-liste.component.html',
  styleUrls: ['./frivillig-liste.component.css']
})
export class FrivilligListeComponent implements OnInit {
  frivillige: Frivillig[] = this.frivilligService.frivillige;
  term : string;
  // Initialize the filtered list to the complete list
  public filteredList = this.frivillige;
  
  constructor(private frivilligService:FrivilligService) { }
  
  ngOnInit() {
  }
  public onChange() {
    //this.term = this.term.toUpperCase();
    // If nothing is in the search box, return to the complete list
    if (!this.term) {
      this.filteredList = this.frivillige;
      return;
    }

    // Filter the list (non-case-sensitive)
    this.filteredList = this.frivillige.filter(item => {
      for (let i = 0; i < this.term.length; i++) {
        if (this.term[i].toLowerCase() !== item.fornavn[i].toLowerCase()) {
          return false;
        }
      }
      return true;
    });
    // Filter the list based on fornavn
    /*for (var index = 0; index < this.term.length; index++) {
      var element = this.term[index];
      this.filteredList = this.frivillige.filter(item => item.fornavn.substr(0, this.term.length-1) === this.term.substr(0, this.term.length-1));
    }*/
  }
}
