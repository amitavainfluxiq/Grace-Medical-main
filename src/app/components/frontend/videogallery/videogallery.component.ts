import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videogallery',
  templateUrl: './videogallery.component.html',
  styleUrls: ['./videogallery.component.css']
})
export class VideogalleryComponent implements OnInit {

  constructor() { window.scrollTo(500, 0);}

  ngOnInit() {
  }

}
