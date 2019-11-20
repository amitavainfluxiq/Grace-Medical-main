import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { MetaService } from '@ngx-meta/core';
import {ApiService} from "../../../api.service";


export interface DialogData {
  // animal: string;
  // name: string;
}

@Component({
  selector: 'app-videogallery',
  templateUrl: './videogallery.component.html',
  styleUrls: ['./videogallery.component.css']
})
export class VideogalleryComponent implements OnInit {

  constructor(public dialog: MatDialog, public apiService: ApiService, private readonly meta: MetaService) { window.scrollTo(500, 0);

    this.meta.setTitle('Grace Medical - Video Gallery');
    this.meta.setTag('og:description', 'Check out the latest videos of the top news and events taking place in the world of Grace Medical and the Healthcare Industry as a whole with a regularly-updated gallery.');
    this.meta.setTag('twitter:description', 'Check out the latest videos of the top news and events taking place in the world of Grace Medical and the Healthcare Industry as a whole with a regularly-updated gallery.');
    this.meta.setTag('og:keyword', 'Grace Medical Video Gallery, Grace Medical Video Collection');
    this.meta.setTag('twitter:keyword', 'Grace Medical Video Gallery, Grace Medical Video Collection');
    this.meta.setTag('og:title', 'Grace Medical - Video Gallery');
    this.meta.setTag('twitter:title', 'Grace Medical - Video Gallery');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');

  }



  openDialog(): void {


    const dialogRef = this.dialog.open(VideoZoom, {
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
  selector: 'videozoom',
  templateUrl: 'videozoom.html',
})
export class VideoZoom {

  constructor(
      public dialogRef: MatDialogRef<VideoZoom>,
      /* @Inject(MAT_DIALOG_DATA) public data: DialogData*/) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}