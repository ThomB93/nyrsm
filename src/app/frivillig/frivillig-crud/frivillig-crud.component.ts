import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Frivillig } from "app/frivillig/frivillig.model";
import { FrivilligService } from "app/frivillig/frivillig.service";


@Component({
  selector: 'app-frivillig-crud',
  templateUrl: './frivillig-crud.component.html',
  styleUrls: ['./frivillig-crud.component.css']
})
export class FrivilligeCrudComponent implements OnInit {
  @ViewChild('EmailInput') EmailInputRef: ElementRef;
  @ViewChild('TelefonNummerInput') TelefonNummerInputRef: ElementRef;
  @ViewChild('ByInput') ByInputRef: ElementRef;
  @ViewChild('PostnrInput') PostnrInputRef: ElementRef;
  @ViewChild('AdresseInput') AdresseInputRef: ElementRef;
  @ViewChild('EfternavnInput') EfternavnInputRef: ElementRef;
  @ViewChild('FornavnInput') FornavnInputRef: ElementRef;
  @ViewChild('IDInput') IDInputRef: ElementRef;
  @ViewChild('ImagePathInput') ImagePathInputRef: ElementRef;
  @ViewChild('IDUpdateInput') IDUpdateInputRef: ElementRef;
  @ViewChild('EmailUpdateInput') EmailUpdateInputRef: ElementRef;
  @ViewChild('TelefonNummerUpdateInput') TelefonNummerUpdateInputRef: ElementRef;
  @ViewChild('ByUpdateInput') ByUpdateInputRef: ElementRef;
  @ViewChild('PostnrUpdateInput') PostnrUpdateInputRef: ElementRef;
  @ViewChild('AdresseUpdateInput') AdresseUpdateInputRef: ElementRef;
  @ViewChild('EfternavnInput') EfternavnUpdateInputRef: ElementRef;
  @ViewChild('FornavnUpdateInput') FornavnUpdateInputRef: ElementRef;
  @ViewChild('ImagePathUpdateInput') ImagePathUpdateInputRef: ElementRef;
  @ViewChild('IDdelete') IDdeleteRef: ElementRef;
  constructor(private FrivilligService: FrivilligService) { }

  ngOnInit() {
  }
  onAddFrivillig() {
    const frivID = this.IDInputRef.nativeElement.value;
    const frivFornavn = this.FornavnInputRef.nativeElement.value;
    const frivEfternavn = this.EfternavnInputRef.nativeElement.value;
    const frivAdresse = this.AdresseInputRef.nativeElement.value;
    const frivPostnr = this.PostnrInputRef.nativeElement.value;
    const frivBy = this.ByInputRef.nativeElement.value;
    const frivTelefon = this.TelefonNummerInputRef.nativeElement.value;
    const frivEmail = this.EmailInputRef.nativeElement.value;
    const frivImagePath = this.ImagePathInputRef.nativeElement.value;
    const AddFrivillig = new Frivillig(frivID, frivFornavn, frivEfternavn, frivAdresse, frivPostnr, frivBy, frivTelefon, frivEmail, frivImagePath);
    this.FrivilligService.frivillige.push(AddFrivillig);
  }
  onDeleteFrivillige() {
    const frivSlet = this.IDdeleteRef.nativeElement.value;
    for (var index = 0; index < this.FrivilligService.frivillige.length; index++) {
      if (frivSlet == this.FrivilligService.frivillige[index].id) {
        this.FrivilligService.frivillige.splice(index, 1);
      }
    }
  }
  onOpdaterFrivillig() {
    const frivUpdateID = this.IDUpdateInputRef.nativeElement.value;
    const frivFornavn = this.FornavnUpdateInputRef.nativeElement.value;
    const frivEfternavn = this.EfternavnUpdateInputRef.nativeElement.value;
    const frivAdresse = this.AdresseUpdateInputRef.nativeElement.value;
    const frivPostnr = this.PostnrUpdateInputRef.nativeElement.value;
    const frivBy = this.ByUpdateInputRef.nativeElement.value;
    const frivTelefon = this.TelefonNummerUpdateInputRef.nativeElement.value;
    const frivEmail = this.EmailUpdateInputRef.nativeElement.value;
    const frivImagePath = this.ImagePathUpdateInputRef.nativeElement.value;
    for (var index = 0; index < this.FrivilligService.frivillige.length; index++) {
      if (frivUpdateID == this.FrivilligService.frivillige[index].id) {
        if (frivAdresse != "") {
          this.FrivilligService.frivillige[index].adresse = frivAdresse;
        }
        if (frivFornavn != "") {
          this.FrivilligService.frivillige[index].fornavn = frivFornavn;
        }
        if (frivEfternavn != "") {
          this.FrivilligService.frivillige[index].efternavn = frivEfternavn;
        }
        if (frivPostnr != "") {
          this.FrivilligService.frivillige[index].postnr = frivPostnr;
        }
        if (frivBy != "") {
          this.FrivilligService.frivillige[index].by = frivBy;
        }
        if (frivTelefon != "") {
          this.FrivilligService.frivillige[index].tlf = frivTelefon;
        }
        if (frivEmail != "") {
          this.FrivilligService.frivillige[index].mail = frivEmail;
        }
        if (frivImagePath != "") {
          this.FrivilligService.frivillige[index].imagePath = frivImagePath;
        }

      }
    }
  }
}
