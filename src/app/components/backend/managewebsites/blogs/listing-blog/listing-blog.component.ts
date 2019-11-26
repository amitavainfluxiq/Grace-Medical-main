import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-listing-blog',
  templateUrl: './listing-blog.component.html',
  styleUrls: ['./listing-blog.component.css']
})
export class ListingBlogComponent implements OnInit {

  
  //Blogs Lib List
  public blogListConfig: any = {
    apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
    listEndPoint: "datalist",
    datasource: "",
    tableName: "blogs",
    updateurl: "addorupdatedata",
    editUrl: "blog-management/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "/blog-management/add",
    view: "blogs"

  }


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) {

  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.blogListConfig.datasource = resolveData.data.res;
      this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');

    });
  }

}



