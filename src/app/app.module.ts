import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryListComponent } from './components/gallery-list/gallery-list.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppService} from "./gallery/app.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GalleryListComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
