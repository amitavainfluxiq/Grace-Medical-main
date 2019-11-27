import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router , ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../../environments/environment.dev';

@Component({
  selector: 'app-add-edit-service',
  templateUrl: './add-edit-service.component.html',
  styleUrls: ['./add-edit-service.component.css']
})
export class AddEditServiceComponent implements OnInit {

  public configAddEdit: any = {
    action: "add",
    endpoint: environment.API_URL+'addorupdatedata',
    source: "service",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "managewebsites/service/list",
    userData: { id: "18801017007", name: "Admin" },
  }

  public configData: any = {
    baseUrl: "http://3.15.236.141:5005/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png"], // use all small font
    type: "service-image",
    path: "service",
    prefix: "service-image_"
  }

  public configData2: any = {
    baseUrl: "http://3.15.236.141:5005/",
    endpoint: "uploads",
    size: "51200", // kb
    format: ["jpg", "jpeg", "png"], // use all small font
    type: "additional-image",
    path: "services",
    prefix: "additional-image_"
  }

  constructor(public cookieService: CookieService ,public activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.serviceList.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}
