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
    
    /*Bruger;

    detaljerCheck = false;

    onBruger = (bruger) =>{  
        this.Bruger = bruger;

        if(this.detaljerCheck === false){
            this.detaljerCheck = true;
        }
        else{
            this.detaljerCheck = false;
        }
    }*/
  constructor(private frivilligService:FrivilligService) { }

  ngOnInit() {
  }
}
