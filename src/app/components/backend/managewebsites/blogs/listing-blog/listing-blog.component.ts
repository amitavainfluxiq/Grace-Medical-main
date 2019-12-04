import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../../api.service';

@Component({
  selector: 'app-listing-blog',
  templateUrl: './listing-blog.component.html',
  styleUrls: ['./listing-blog.component.css']
})
export class ListingBlogComponent implements OnInit {

  
  //Blogs Lib List
  // public blogListConfig: any = {
  //   // apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
  //   apiBaseUrl: this.apiService.serverUrl,
  //   listEndPoint: "datalist",
  //   datasource: "",
  //   tableName: "blogs",
  //   updateurl: "addorupdatedata",
  //   editUrl: "/manage-article/edit",
  //   jwtToken: "",
  //   deleteEndPoint: "deletesingledata",
  //   addLink: "/manage-article/add",
  //   view: "blogs"
  // }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService) {

  }

  ngOnInit() {
    // this.activatedRoute.data.subscribe(resolveData => {
    //   this.blogListConfig.datasource = resolveData.data.res;
    //   this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');

    // });
  }

}



