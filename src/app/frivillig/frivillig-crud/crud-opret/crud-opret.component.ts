import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FrivilligService } from "app/frivillig/frivillig.service";
import { Frivillig } from "app/frivillig/frivillig.model";

@Component({
  selector: 'app-crud-opret',
  templateUrl: './crud-opret.component.html',
  styleUrls: ['./crud-opret.component.css']
})
export class CrudOpretComponent implements OnInit {
  @ViewChild('EmailInput') EmailInputRef: ElementRef;
  @ViewChild('TelefonNummerInput') TelefonNummerInputRef: ElementRef;
  @ViewChild('ByInput') ByInputRef: ElementRef;
  @ViewChild('PostnrInput') PostnrInputRef: ElementRef;
  @ViewChild('AdresseInput') AdresseInputRef: ElementRef;
  @ViewChild('EfternavnInput') EfternavnInputRef: ElementRef;
  @ViewChild('FornavnInput') FornavnInputRef: ElementRef;
  @ViewChild('IDInput') IDInputRef: ElementRef;
  @ViewChild('ImagePathInput') ImagePathInputRef: ElementRef;
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

}
