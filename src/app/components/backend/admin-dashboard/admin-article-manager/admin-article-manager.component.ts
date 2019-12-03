import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
 import{CookieService} from 'ngx-cookie-service';
 import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-admin-article-manager',
  templateUrl: './admin-article-manager.component.html',
  styleUrls: ['./admin-article-manager.component.css']
})
export class AdminArticleManagerComponent implements OnInit {

  /************** lib list setup start here *************/
  public blogCatConfig:any = {
    // apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
    apiBaseUrl: this.apiService.serverUrl,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "blog_category",
    updateurl: "addorupdatedata",
    editUrl: "manage-article-category/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",
    addLink: "manage-article-category/add",
    view: "blog_category_view"
    
  }


   //Blogs Lib List
   public blogListConfig: any = {
    apiBaseUrl: this.apiService.serverUrl,
    listEndPoint: "datalist",
    datasource: [],
    tableName: "blogs",
    updateurl: "addorupdatedata",
    editUrl: "blogs/edit",
    jwtToken: this.cookieService.get('jwtToken'),
    deleteEndPoint: "deletesingledata",
    addLink: "blogs/add",
    view: "blogs_view"
  }
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService) {

    // this.activatedRoute.data.subscribe(resolveData => {
    //   this.blogCatConfig.datasource = resolveData.data.res;

    //   // console.log('kb article cat list', this.blogCatConfig.datasource);

    //   this.blogCatConfig.jwtToken = this.cookieService.get('jwtToken');
      
    // });

    let data: any = {
      source:"blog_category_view",
      endpoint: "datalistwithouttoken"
      // token: this.cookieService.get('jwtToken')

    }
    this.apiService.getDatalist(data).subscribe((result: any)=>{
      console.log(result.res);
      this.blogCatConfig.datasource = result.res;
      //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogCatConfig.datasource);
    });



    this.activatedRoute.data.forEach((data: any) => {
      //console.log('>>>>>>>koushik>>>>>>>',data)
      // this.blogsList = data.blogCatList.res;
      this.blogListConfig.datasource = data.blogsList.res;
    })


   }

  ngOnInit() {

    
  }

}
