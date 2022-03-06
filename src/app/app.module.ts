import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryListComponent } from './components/gallery-list/gallery-list.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppService} from "./gallery/app.service";
import {FormsModule} from "@angular/forms";
import { UserFormComponent } from './user-form/user-form.component';
import {AppRoutingModule} from "./app-routing.module";
import { UserListComponent } from './user-list/user-list.component';
import { GalleryFormComponent } from './gallery-form/gallery-form.component';
import { GalleryFormListComponent } from './gallery-form-list/gallery-form-list.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryListComponent,
    UserFormComponent,
    UserListComponent,
    GalleryFormComponent,
    GalleryListComponent,
    GalleryFormListComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
