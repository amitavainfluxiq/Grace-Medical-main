import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../../../environments/environment.dev';



@Component({
  selector: 'app-listing-service',
  templateUrl: './listing-service.component.html',
  styleUrls: ['./listing-service.component.css']
})
export class ListingServiceComponent implements OnInit {

    /************** lib list setup start here *************/
    public serviceListConfig:any = {
      apiBaseUrl: environment.API_URL,
      listEndPoint: "datalist",
      datasource: "",
      tableName: "service",
      updateurl: "addorupdatedata",
      editUrl: "manage-service/edit",
      jwtToken: "",
      deleteEndPoint: "deletesingledata",
      addLink: "manage-service/add",
      view:"service"
    }
  
  constructor( private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService ) { 

  this.activatedRoute.data.subscribe(resolveData => {
    this.serviceListConfig.datasource = resolveData.serviceList.res;
    this.serviceListConfig.jwtToken = this.cookieService.get('jwtToken');
    
  });
}

  ngOnInit() {
  }

}
