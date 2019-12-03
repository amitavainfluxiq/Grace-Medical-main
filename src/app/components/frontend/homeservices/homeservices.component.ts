import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-homeservices',
  templateUrl: './homeservices.component.html',
  styleUrls: ['./homeservices.component.css']
})
export class HomeservicesComponent implements OnInit {
  // public serviceData: any ='';
public serviceListConfig: any;




  constructor( private activatedRoute : ActivatedRoute , private cookieService : CookieService, public apiService: ApiService) { 

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

}
