import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FrivilligService } from "app/frivillig/frivillig.service";

@Component({
  selector: 'app-crud-slet',
  templateUrl: './crud-slet.component.html',
  styleUrls: ['./crud-slet.component.css']
})
export class CrudSletComponent implements OnInit {
  @ViewChild('IDdelete') IDdeleteRef: ElementRef;
  constructor(private FrivilligService: FrivilligService) { }

  ngOnInit() {
  }
  onDeleteFrivillige() {
    const frivSlet = this.IDdeleteRef.nativeElement.value;
    for (var index = 0; index < this.FrivilligService.frivillige.length; index++) {
      if (frivSlet == this.FrivilligService.frivillige[index].id) {
        this.FrivilligService.frivillige.splice(index, 1);
      }
    }
  }

}
