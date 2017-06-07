import { Injectable, EventEmitter } from '@angular/core';
import { Frivillig } from './frivillig.model';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class FrivilligService {
  frivilligSelected = new EventEmitter<Frivillig>();

  constructor(private http : Http) { }
  frivillige: Frivillig[] = [
    new Frivillig('Casper', 'Madsen', 'Jacob Gades Stræde 2', '7100', 'Vejle', '31574159', 'casp.mad@gmail.com', 'https://i.imgur.com/vQyC3DA.png'),
    new Frivillig('Frants', 'Stentzer', 'Fredensgade 13', '6000', 'Kolding', '66666666', 'frants.ste@gmail.com', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDTgtxoDw6nzJpdLUCnTI33HH2xuNi4sC6DCKNMLD-NHX_c1cRA'),
    new Frivillig('Lasse', 'Broust', 'Jacob Gades Stræde 2', '7100', 'Vejle', '31574159', 'lasse.broust@gmail.com', 'http://www.danskfilmogteater.dk/skuespillere/A/lasse_brovst_andersen_edited.jpg'),
    new Frivillig('Thomas', 'Brunbjerg', 'Jacob Gades Stræde 2', '7100', 'Vejle', '31574159', 'thomas.brun@gmail.com', 'https://odesk-prod-portraits.s3.amazonaws.com/Users:thomb:PortraitUrl_100?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=cj%2BTb4B%2BiyahtR6SfD0l3RWA150%3D&1485630868662988'),
    new Frivillig('Carl', 'Test', 'Jacob Gades Stræde 2', '7100', 'Vejle', '31574159', 'casp.mad@gmail.com', 'https://blog.prepscholar.com/hubfs/body_testinprogress.gif?t=1496325576746')
  ];
  getAlleMockFrivillige(): Promise<Frivillig[]> {
    return Promise.resolve(this.frivillige);
  }
  getAllFrivillige() {
    return this.http.get('/api/frivillige')
      .map(res => res.json()); //call this function on each value from http get
  }
}
