import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public serviceListConfig:any = {
    apiBaseUrl: this.apiService.serverUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "services",
    updateurl: "addorupdatedata",
    editUrl: "service/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/service/add",
    view:"services_view"
  }
  constructor( private activatedRoute : ActivatedRoute , private cookieService : CookieService, public apiService: ApiService) { window.scrollTo(500, 0);}

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.serviceListConfig.datasource = resolveData.serviceList.res;
      console.log("Data asche->",this.serviceListConfig.datasource);
      this.serviceListConfig.jwtToken = this.cookieService.get('jwtToken');
    });
  
  }

}
