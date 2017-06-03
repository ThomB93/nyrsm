import { Injectable, EventEmitter } from '@angular/core';
import { Laug } from "app/laug/laug.model";

@Injectable()
export class LaugService {
  laugSelected = new EventEmitter<Laug>();

  constructor() { }

    laugs: Laug[] = [
    new Laug("Skibslaug", "Lauget for skibe", "http://www.vilhelmsskibslaug.dk/Forside/VilhelmSejl.jpg"),
    new Laug("Smedelaug", "Lauget for smede", "http://www.maskinbladet.dk/assets/imagecache/960x540/article/65215_1_xl.jpg"),
    new Laug("Kirkelaug", "Lauget for kirker", "http://adlbn.dk/wp-content/uploads/2013/08/Kirkelaug.jpg"),
    new Laug("Møllelaug", "Lauget for møller", "http://natmus.dk/typo3temp/GB/5fa916ef04.jpg")
  ];
}
