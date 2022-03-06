import { Component, OnInit } from '@angular/core';
import {Gallery} from "../common/gallery";
import {GalleryServiceService} from "../gallery-service.service";

@Component({
  selector: 'app-gallery-form-list',
  templateUrl: './gallery-form-list.component.html',
  styleUrls: ['./gallery-form-list.component.css']
})
export class GalleryFormListComponent implements OnInit {

  isDisplay = true;

  showOverview(){
    this.isDisplay = !this.isDisplay;
  }

  gallery!: Gallery[];

  constructor(private userService: GalleryServiceService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.gallery = data;
    });
  }
}
