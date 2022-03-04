import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Gallery} from "../common/gallery";

@Injectable({
  providedIn: 'root'
})
export class AppService {


  private baseUrl = "http://localhost:8080/api/images";

  constructor(private httpClient: HttpClient) { }

  getGalleryList(): Observable<Gallery[]>{

    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.images)
    );
  }
}

interface GetResponse{
  _embedded:{
    images: Gallery[];
  }
}


