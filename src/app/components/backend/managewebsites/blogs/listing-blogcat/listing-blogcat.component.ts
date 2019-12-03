
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
 import{CookieService} from 'ngx-cookie-service';
 import { ApiService } from '../../../../../api.service';

@Component({
  selector: 'app-listing-blogcat',
  templateUrl: './listing-blogcat.component.html',
  styleUrls: ['./listing-blogcat.component.css']
})
export class ListingBlogcatComponent implements OnInit {

  
    /************** lib list setup start here *************/
    public blogListConfig:any = {
      // apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
      apiBaseUrl: this.apiService.serverUrl,
      listEndPoint: "datalist",
      datasource: "",
      tableName: "blog_category",
      updateurl: "addorupdatedata",
      editUrl: "blog-category/edit",
      jwtToken: "",
      deleteEndPoint: "deletesingledata",
      addLink: "/blog-category/add",
      view: "blog_category_view"
      
    }
    constructor( private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService ) { 

      this.activatedRoute.data.subscribe(resolveData => {
        this.blogListConfig.datasource = resolveData.data.res;
        this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
        
      });
    }
  ngOnInit() {
    
    
  }

}
