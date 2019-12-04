import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
// import { ApiService } from '../../../../../api.service';
import{environment} from '../../../../../../environments/environment.dev'

@Component({
  selector: 'app-add-edit-blog',
  templateUrl: './add-edit-blog.component.html',
  styleUrls: ['./add-edit-blog.component.css']
})
export class AddEditBlogComponent implements OnInit {

  // server: any ='https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/';
  server: any = environment.API_URL;
  addUrl: any = 'addorupdatedata';
  getDataUrl: any= 'datalist';
  public editdata: any = [];
  action:any="add";
  listURL:any="manage-article/list";



  public configData: any = {
    baseUrl: "http://3.15.236.141:5005/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png"], // use all small font
    type: "blogs-image",
    path: "blogs",
    prefix: "blogs-image_"
  }

  public configFileData: any = {
    baseUrl: "http://3.15.236.141:5005/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["pdf", "doc", "docx","docxx"], // use all small font
    type: "blogs-file",
    path: "blogs",
    prefix: "blogs-file"
  }
constructor(private cookieService: CookieService, private activatedRoute: ActivatedRoute) { }

ngOnInit() {
  
  this.activatedRoute.params.subscribe(params => {
    if (params._id) {
      this.activatedRoute.data.subscribe(resolveData => {         
        this.editdata= resolveData.blogsList.res[0];  
        this.action="edit";    
      });
    }
  });
}

}
