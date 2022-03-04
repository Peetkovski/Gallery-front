import { Component, OnInit } from '@angular/core';
import {AppService} from "../../gallery/app.service";
import {Gallery} from "../../common/gallery";

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {

  gallery!: Gallery[];
  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.listGallery();
  }

  listGallery(){
    this.appService.getGalleryList().subscribe(
      data => {
        this.gallery = data;
      }
    )
  }

}
