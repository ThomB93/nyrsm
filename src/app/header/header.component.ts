import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  frivilligActive : boolean = false;
  laugActive : boolean = false;
  crudFrivilligActive : boolean = false;

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
    if(feature == "frivillige") {
      this.frivilligActive = true;
      this.laugActive = false;
      this.crudFrivilligActive = false;
    } else if(feature == "laug") {
      this.frivilligActive = false;
      this.laugActive = true;
      this.crudFrivilligActive = false;
    } else if(feature == "crudfrivillige") {
      this.frivilligActive = false;
      this.laugActive = false;
      this.crudFrivilligActive = true;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
