import { Injectable, EventEmitter } from '@angular/core';
import { Frivillig } from './frivillig.model';

@Injectable()
export class FrivilligService {
  frivilligSelected = new EventEmitter<Frivillig>();

  constructor() { }
  frivillige: Frivillig[] = [
    new Frivillig(1, 'Casper', 'Madsen', 'Jacob Gades Stræde 2', 7100, 'Vejle', 31574159, 'casp.mad@gmail.com', 'https://i.imgur.com/vQyC3DA.png'),
    new Frivillig(2, 'Frants', 'Stentzer', 'Fredensgade 13', 6000, 'Kolding', 66666666, 'frants.ste@gmail.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDTgtxoDw6nzJpdLUCnTI33HH2xuNi4sC6DCKNMLD-NHX_c1cRA')
  ];
}