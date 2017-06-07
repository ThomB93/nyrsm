import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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
import { CrudOpretComponent } from './frivillig/frivillig-crud/crud-opret/crud-opret.component';
import { CrudSletComponent } from './frivillig/frivillig-crud/crud-slet/crud-slet.component';
import { CrudRedigerComponent } from './frivillig/frivillig-crud/crud-rediger/crud-rediger.component';

const ROUTES = [ //when going to root /, redirect to /posts
  {
    path: '',
    redirectTo: 'laugs',
    pathMatch: 'full'
  },
  {
    path: 'laugs', //delare posts route
    component: LaugComponent
  }
];

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
    CrudOpretComponent,
    CrudSletComponent,
    CrudRedigerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [FrivilligService, LaugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
