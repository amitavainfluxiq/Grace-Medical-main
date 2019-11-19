import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


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

  constructor(public dialog: MatDialog) { window.scrollTo(500, 0);}


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