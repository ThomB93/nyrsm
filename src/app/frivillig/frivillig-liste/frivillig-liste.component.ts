import { Component, OnInit } from '@angular/core';
import { Frivillig } from '../frivillig.model';
import{ FrivilligService } from '../frivillig.service';

@Component({
  selector: 'app-frivillig-liste',
  templateUrl: './frivillig-liste.component.html',
  styleUrls: ['./frivillig-liste.component.css']
})
export class FrivilligListeComponent implements OnInit {
  frivillige: any[];
  modelFrivillige : Frivillig[] = [];
  term : string;
  // Initialize the filtered list to the complete list
  filteredList : Frivillig[];
  
  constructor(private frivilligService:FrivilligService) { }
  
  ngOnInit() {
    this.frivilligService.getAllFrivillige().subscribe(frivillig => {
      this.frivillige = frivillig; //save posts in array
      for (var i = 0; i < this.frivillige.length; i++) {//map JSON til frivillig objekter
        this.modelFrivillige.push(new Frivillig(this.frivillige[i].fornavn, this.frivillige[i].efternavn,
        this.frivillige[i].addresse, this.frivillige[i].postnr, this.frivillige[i].by,
        this.frivillige[i].telefon, this.frivillige[i].mail, this.frivillige[i].imagePath)); 
      }
      this.filteredList = this.modelFrivillige;
    });
  }
  public onChange() {
    // If nothing is in the search box, return to the complete list
    if (!this.term) {
      this.filteredList = this.modelFrivillige;
      return;
    }
    // Filter the list (non-case-sensitive)
    this.filteredList = this.modelFrivillige.filter(item => {
      for (let i = 0; i < this.term.length; i++) {
        if (this.term[i].toLowerCase() !== item.fornavn[i].toLowerCase()) {
          return false;
        }
      }
      return true;
    });
  }
}
