import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrivilligComponent } from './frivillig/frivillig.component';
import { FrivilligListeComponent } from './frivillig/frivillig-liste/frivillig-liste.component';
import { FrivilligDetaljerComponent } from './frivillig/frivillig-detaljer/frivillig-detaljer.component';
import { FrivilligItemComponent } from './frivillig/frivillig-liste/frivillig-item/frivillig-item.component';
import { LaugComponent } from './laug/laug.component';
import { LaugKortComponent } from './laug/laug-kort/laug-kort.component';
import { LaugDetaljerComponent } from './laug/laug-detaljer/laug-detaljer.component';
import { FrivilligService } from "app/frivillig/frivillig.service";
import {LaugService} from "app/laug/laug.service";
import { FrivilligeCrudComponent } from './frivillig/frivillig-crud/frivillig-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrivilligComponent,
    FrivilligListeComponent,
    FrivilligDetaljerComponent,
    FrivilligItemComponent,
    LaugComponent,
    LaugKortComponent,
    LaugDetaljerComponent,
    FrivilligeCrudComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [FrivilligService, LaugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
