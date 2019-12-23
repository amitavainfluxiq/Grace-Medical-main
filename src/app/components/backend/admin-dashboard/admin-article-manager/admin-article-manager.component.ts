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
  

  articleCatConfig: any = [];
  articleCatConfig_skip: any = ["_id"];
  detail_skip_array:any=["_id"]
  articleCatConfig_modify_header: any = {"blogtitle":"Article Name",
  "parent category":"Parent Category","priority":"Priority","status":"Status"};
  tableName: any = 'inventories';
  UpdateEndpoint: any = "addorupdatedata";
  deleteEndpoint: any = "deletesingledata";
  searchingEndpoint: any = "datalist";
  editUrl: any = 'manage-article-category/edit';
  status: any = [{ val: 1, 'name': 'Active' },{ val: 0, 'name': 'Inactive' }];
  view:any="blog_category_view";
  public search_settings: any = {
  selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
  textsearch: [{ label: 'Search By Article', field: 'blogtitle' }]
  };

  blogListConfig: any = [];
  blogListConfig_skip: any = ["_id","credentials","blogs_image","categorydata"];
  blogListDetail_skip_array:any=["_id"]
  blogListConfig_modify_header: any = {"blogtitle":"Article Name",
  "parent category":"Parent Category","priority":"Priority","status":"Status"};
  blogListTableName: any = 'inventories';
  blogListUpdateEndpoint: any = "addorupdatedata";
  blogListDeleteEndpoint: any = "deletesingledata";
  blogListSearchingEndpoint: any = "datalist";
  blogListEditUrl: any = 'manage-article/edit';
  blogListStatus: any = [{ val: 1, 'name': 'Active' },{ val: 0, 'name': 'Inactive' }];
  blogListView:any="blog_category_view";
  public blogListSearch_settings: any = {
    selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
    textsearch: [{ label: 'Search By Article', field: 'blogtitle' }]
  };




  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService) {
  
  
    this.activatedRoute.data.forEach((data: any) => {
      //console.log('>>>>>>>koushik>>>>>>>',data)
      // this.blogsList = data.blogCatList.res;
      this.blogListConfig = data.blogsList.res;
            // console.log('>>>>>>>koushik>>>>>>>',this.blogListConfig)

    })



    




   }

  ngOnInit() {


    let data: any = {
      source:"blog_category_view",
      token: this.cookieService.get('jwtToken')
    }
    this.apiService.httpViaPost("datalist", data).subscribe((result: any)=>{
      //console.log(result.res);
      this.articleCatConfig = result.res;
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.articleCatConfig);
    });
       
  }

}
