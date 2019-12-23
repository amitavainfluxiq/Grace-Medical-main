import {Component, OnInit, Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';

import { MetaService } from '@ngx-meta/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';

export interface DialogData {
  description: any;
  service_title: any;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public serviceData: any ='';

 

  // public serviceListConfig:any = {
  //   apiBaseUrl: this.apiService.serverUrl,
  //   listEndPoint: "datalist",
  //   datasource: "",
  //   tableName: "services",
  //   updateurl: "addorupdatedata",
  //   editUrl: "service/edit",
  //   jwtToken: "",
  //   deleteEndPoint: "deletesingledata",
  //   addLink: "/service/add",
  //   view:"services_view"
  // }
  constructor( private activatedRoute : ActivatedRoute , private cookieService : CookieService, public apiService: ApiService, private readonly meta: MetaService, public dialog: MatDialog) {


     window.scrollTo(500, 0);


    this.meta.setTitle('Grace Medical Services');
    this.meta.setTag('og:description', 'Premium Medical Care and High-Quality Preventative Healthcare Services to help patients maintain premium Health conditions and prevent the development of new critical conditions.');
    this.meta.setTag('twitter:description', 'Premium Medical Care and High-Quality Preventative Healthcare Services to help patients maintain premium Health conditions and prevent the development of new critical conditions.');
    this.meta.setTag('og:keyword', 'Premium Medical Care, High-Quality Preventative Healthcare Services, Top-Quality Healthcare Services');
    this.meta.setTag('twitter:keyword', 'Premium Medical Care, High-Quality Preventative Healthcare Services, Top-Quality Healthcare Services');
    this.meta.setTag('og:title', 'Grace Medical Services');
    this.meta.setTag('twitter:title', 'Grace Medical Services');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');


  

  }

  openDialog(itemVal:any): void {
    const dialogRef = this.dialog.open(ServicesModal, {
      // width: '250px',
      data: {description: itemVal.description, service_title: itemVal.service_title,}
    });

    dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
      // this.animal = result;
    });
  }


  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      console.log(resolveData.serviceList.res)
      this.serviceData = resolveData.serviceList.res;
      console.log("true data" + resolveData)
    });
  
  }

  copyText(val:any){
    console.log('');
  }

}



@Component({
  selector: 'servicesModal',
  templateUrl: 'servicesModal.html',
})
export class ServicesModal {

 

 constructor(public dialogRef: MatDialogRef<ServicesModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

}