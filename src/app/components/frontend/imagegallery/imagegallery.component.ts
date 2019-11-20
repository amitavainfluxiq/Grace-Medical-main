import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import { MetaService } from '@ngx-meta/core';
import {ApiService} from "../../../api.service";


export interface DialogData {
  // animal: string;
  // name: string;
}

@Component({
  selector: 'app-imagegallery',
  templateUrl: './imagegallery.component.html',
  styleUrls: ['./imagegallery.component.css']
})
export class ImagegalleryComponent implements OnInit {

  constructor(public dialog: MatDialog, public apiService: ApiService, private readonly meta: MetaService) { window.scrollTo(500, 0);

    this.meta.setTitle('Grace Medical - Image Gallery');
    this.meta.setTag('og:description', 'Check out the latest images and official pictures of events we host and the Healthcare services we offer. These images are updated regularly to keep you abreast of all that’s happening in the Healthcare industry.');
    this.meta.setTag('twitter:description', 'Check out the latest images and official pictures of events we host and the Healthcare services we offer. These images are updated regularly to keep you abreast of all that’s happening in the Healthcare industry.');
    this.meta.setTag('og:keyword', 'Grace Medical Image Gallery, Grace Medical Picture Collection');
    this.meta.setTag('twitter:keyword', 'Grace Medical Image Gallery, Grace Medical Picture Collection');
    this.meta.setTag('og:title', 'Grace Medical - Image Gallery');
    this.meta.setTag('twitter:title', 'Grace Medical - Image Gallery');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');

  }


  openDialog(): void {


    const dialogRef = this.dialog.open(GalleryZoom, {
      // width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }



  ngOnInit() {
  }

}


@Component({
  selector: 'galleryzoom',
  templateUrl: 'galleryzoom.html',
})
export class GalleryZoom {

  constructor(
      public dialogRef: MatDialogRef<GalleryZoom>,
      /* @Inject(MAT_DIALOG_DATA) public data: DialogData*/) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}