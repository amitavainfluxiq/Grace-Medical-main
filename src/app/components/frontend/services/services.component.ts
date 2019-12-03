import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';

import { MetaService } from '@ngx-meta/core';

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
  constructor( private activatedRoute : ActivatedRoute , private cookieService : CookieService, public apiService: ApiService, private readonly meta: MetaService) {
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
