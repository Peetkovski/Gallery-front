import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GalleryServiceService} from "../gallery-service.service";
import {Gallery} from "../common/gallery";

@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.css']
})
export class GalleryFormComponent implements OnInit {

  gallery: Gallery;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: GalleryServiceService) {
    this.gallery = new Gallery();
  }

  onSubmit() {
    this.userService.save(this.gallery).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/file']);
  }

  ngOnInit() {
  }
}
