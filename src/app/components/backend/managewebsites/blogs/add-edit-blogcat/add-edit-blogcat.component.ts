import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment} from '../../../../../../environments/environment.dev';

@Component({
  selector: 'app-add-edit-blogcat',
  templateUrl: './add-edit-blogcat.component.html',
  styleUrls: ['./add-edit-blogcat.component.css']
})
export class AddEditBlogcatComponent implements OnInit {

  
  public configAddEdit: any = {
    action: "add",
    endpoint: environment.API_URL+'addorupdatedata',
    endpoint2:environment.API_URL,
    // API_URL

    source: "blog_category",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "blog-category/list",
    userData: { id: "18801017007", name: "Admin" },
    defaultDataAlways: null
  }
  constructor(public activatedRoute: ActivatedRoute , private cookieService : CookieService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params._id) {
        this.activatedRoute.data.subscribe(resolveData => {         
          this.configAddEdit.defaultData = resolveData.data.res[0];          
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
   
  }


}

