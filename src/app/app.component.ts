import { Component } from '@angular/core';
import {AppService} from "./gallery/app.service";
import {style} from "@angular/animations";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisplay = true;
  title = "ess";


  showOverview(){
  this.isDisplay = !this.isDisplay;
  }

  //TODO DODAJ POST METHOD DO BACKENDU!!!!!


}

