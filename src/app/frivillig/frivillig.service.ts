import { Injectable, EventEmitter } from '@angular/core';
import { Frivillig } from './frivillig.model';

@Injectable()
export class FrivilligService {
  frivilligSelected = new EventEmitter<Frivillig>();

  constructor() { }
  frivillige: Frivillig[] = [
    new Frivillig(1, 'Casper', 'Madsen', 'Jacob Gades Stræde 2', 7100, 'Vejle', 31574159, 'casp.mad@gmail.com', 'https://i.imgur.com/vQyC3DA.png'),
    new Frivillig(2, 'Frants', 'Stentzer', 'Fredensgade 13', 6000, 'Kolding', 66666666, 'frants.ste@gmail.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDTgtxoDw6nzJpdLUCnTI33HH2xuNi4sC6DCKNMLD-NHX_c1cRA'),
    new Frivillig(3, 'Lasse', 'Broust', 'Jacob Gades Stræde 2', 7100, 'Vejle', 31574159, 'lasse.broust@gmail.com', 'http://www.danskfilmogteater.dk/skuespillere/A/lasse_brovst_andersen_edited.jpg'),
    new Frivillig(4, 'Thomas', 'Brunbjerg', 'Jacob Gades Stræde 2', 7100, 'Vejle', 31574159, 'thomas.brun@gmail.com', 'https://odesk-prod-portraits.s3.amazonaws.com/Users:thomb:PortraitUrl_100?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=cj%2BTb4B%2BiyahtR6SfD0l3RWA150%3D&1485630868662988'),
    new Frivillig(5, 'Carl', 'Test', 'Jacob Gades Stræde 2', 7100, 'Vejle', 31574159, 'casp.mad@gmail.com', 'https://blog.prepscholar.com/hubfs/body_testinprogress.gif?t=1496325576746')
  ];
  /*getAlleFrivillige() {
    return this.frivillige;
  }*/
  getAlleFrivillige(): Promise<Frivillig[]> {
    return Promise.resolve(this.frivillige);
  }
}
