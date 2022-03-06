import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gallery} from "./common/gallery";

@Injectable({
  providedIn: 'root'
})
export class GalleryServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/file';
  }
  public findAll(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(this.usersUrl);
  }

  public save(gallery: Gallery) {
    return this.http.post<Gallery>(this.usersUrl, gallery);
  }
}
