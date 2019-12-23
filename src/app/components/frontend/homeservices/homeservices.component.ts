import {Component, OnInit, Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';



export interface DialogData {
  description: any;
  service_title: any;
}


@Component({
  selector: 'app-homeservices',
  templateUrl: './homeservices.component.html',
  styleUrls: ['./homeservices.component.css']
})
export class HomeservicesComponent implements OnInit {
  // public serviceData: any ='';
public serviceListConfig: any;




  constructor( private activatedRoute : ActivatedRoute , private cookieService : CookieService, public apiService: ApiService, public dialog: MatDialog) { 

    let data: any = {
      source:"service_view",
      endpoint: "datalistwithouttoken"
      // token: this.cookieService.get('jwtToken')

    }
    this.apiService.getDatalist(data).subscribe((result: any)=>{
      console.log(result.res);
      this.serviceListConfig= result.res;
      //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.serviceListConfig.datasource);
    });

  }

  ngOnInit() {
    // this.activatedRoute.data.subscribe(resolveData => {
    //   //console.log(resolveData.serviceListHome.res)
    //   this.serviceData = resolveData.serviceListHome.res;
    //   console.log('kkkk',  this.serviceData );
    //   // console.log("true data" + resolveData)
    // });
  }


  openDialog(itemVal:any): void {
    const dialogRef = this.dialog.open(ServicesModalhome, {
      // width: '250px',
      data: {description: itemVal.description, service_title: itemVal.service_title,}
    });

    dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}



@Component({
  selector: 'ServicesModalhome',
  templateUrl: 'servicesModalHome.html',
})
export class ServicesModalhome {

 

 constructor(public dialogRef: MatDialogRef<ServicesModalhome>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

}