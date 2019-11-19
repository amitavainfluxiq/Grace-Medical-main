import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


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

  constructor(public dialog: MatDialog) { window.scrollTo(500, 0);}

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