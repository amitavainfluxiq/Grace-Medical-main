import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
 import{CookieService} from 'ngx-cookie-service';
 import { ApiService } from '../../../../api.service';
 import {environment} from '../../../../../environments/environment.dev';

@Component({
  selector: 'app-admin-article-manager',
  templateUrl: './admin-article-manager.component.html',
  styleUrls: ['./admin-article-manager.component.css']
})
export class AdminArticleManagerComponent implements OnInit {

  public base_URL:any = environment['API_URL'];

// ===============================Declarations=========================
blogCatConfig: any = [];
blogCatConfig_skip: any = ["_id"];
detail_skip_array:any=["_id"]
blogCatConfig_modify_header: any = {"brand name":"Brand Name",
"parent category":"Parent Category","priority":"Priority","status":"Status"};
tableName: any = 'inventories';
UpdateEndpoint: any = "addorupdatedata";
deleteEndpoint: any = "deletesingledata";
searchingEndpoint: any = "datalist";
editUrl: any = 'manage-article-category/edit';
apiBaseUrl:any=this.base_URL;
status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
view:any="blog_category_view";
public search_settings: any = {
selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
textsearch: [{ label: "Search By brand name...", field: 'brand_name' }]
};
// ====================================================================




  /************** lib list setup start here *************/
//   public blogCatConfig:any = {
//     // apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
//     apiBaseUrl: this.apiService.serverUrl,
//     listEndPoint: "datalist",
//     datasource: "",
//     tableName: "blog_category",
//     updateurl: "addorupdatedata",
//     editUrl: "manage-article-category/edit",
//     jwtToken: "",
//     deleteEndPoint: "deletesingledata",
//     addLink: "manage-article-category/add",
//     view: "blog_category_view"

//  }


   //Blogs Lib List
   public blogListConfig: any = {
    apiBaseUrl: this.apiService.serverUrl,
    listEndPoint: "datalist",
    datasource: [],
    tableName: "blogs",
    updateurl: "addorupdatedata",
    editUrl: "manage-article/edit",
    jwtToken: this.cookieService.get('jwtToken'),
    deleteEndPoint: "deletesingledata",
    addLink: "manage-article/add",
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
    this.apiService.httpViaPost("datalist", data).subscribe((result: any)=>{
      //console.log(result.res);
      this.blogCatConfig = result.res;
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogCatConfig);
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
