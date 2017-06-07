import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FrivilligService } from "app/frivillig/frivillig.service";

@Component({
  selector: 'app-crud-rediger',
  templateUrl: './crud-rediger.component.html',
  styleUrls: ['./crud-rediger.component.css']
})
export class CrudRedigerComponent implements OnInit {
  @ViewChild('IDUpdateInput') IDUpdateInputRef: ElementRef;
  @ViewChild('EmailUpdateInput') EmailUpdateInputRef: ElementRef;
  @ViewChild('TelefonNummerUpdateInput') TelefonNummerUpdateInputRef: ElementRef;
  @ViewChild('ByUpdateInput') ByUpdateInputRef: ElementRef;
  @ViewChild('PostnrUpdateInput') PostnrUpdateInputRef: ElementRef;
  @ViewChild('AdresseUpdateInput') AdresseUpdateInputRef: ElementRef;
  @ViewChild('EfternavnUpdateInput') EfternavnUpdateInputRef: ElementRef;
  @ViewChild('FornavnUpdateInput') FornavnUpdateInputRef: ElementRef;
  @ViewChild('ImagePathUpdateInput') ImagePathUpdateInputRef: ElementRef;
  constructor(private FrivilligService: FrivilligService) { }

  ngOnInit() {
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
