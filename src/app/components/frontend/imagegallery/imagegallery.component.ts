import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagegallery',
  templateUrl: './imagegallery.component.html',
  styleUrls: ['./imagegallery.component.css']
})
export class ImagegalleryComponent implements OnInit {

  constructor() { window.scrollTo(500, 0);}

  ngOnInit() {
  }

}
