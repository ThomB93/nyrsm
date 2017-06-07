import { Injectable, EventEmitter } from '@angular/core';
import { Laug } from "app/laug/laug.model";
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class LaugService {
  laugSelected = new EventEmitter<Laug>();

  constructor(private http : Http) { }

    laugs: Laug[] = [
    new Laug("Skibslaug", "Lauget for skibe", "http://www.vilhelmsskibslaug.dk/Forside/VilhelmSejl.jpg"),
    new Laug("Smedelaug", "Lauget for smede", "http://www.maskinbladet.dk/assets/imagecache/960x540/article/65215_1_xl.jpg"),
    new Laug("Kirkelaug", "Lauget for kirker", "http://adlbn.dk/wp-content/uploads/2013/08/Kirkelaug.jpg"),
    new Laug("Møllelaug", "Lauget for møller", "http://natmus.dk/typo3temp/GB/5fa916ef04.jpg")
  ];
  getAllLaug() {
    return this.http.get('/api/laugs')
      .map(res => res.json()); //call this function on each value from http get
  }
  getAllFrivillige() {
    return this.http.get('/api/frivillige')
      .map(res => res.json()); //call this function on each value from http get
  }
}
