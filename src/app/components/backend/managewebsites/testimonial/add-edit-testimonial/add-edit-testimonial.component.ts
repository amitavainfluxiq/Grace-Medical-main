import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../../../environments/environment.dev';


@Component({
  selector: 'app-add-edit-testimonial',
  templateUrl: './add-edit-testimonial.component.html',
  styleUrls: ['./add-edit-testimonial.component.css']
})
export class AddEditTestimonialComponent implements OnInit {

  /* Config for add and edit start */
public configAddEdit: any = {
  action: "add",
  // endpoint: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/addorupdatedata",
  endpoint: environment.API_URL + 'addorupdatedata',
  source: "testimonial",
  condition: {},
  defaultData: null,
  jwtToken: this.cookieService.get('jwtToken'),
  callBack: "manage-testimonial/list",
  userData: { id: "18801017007", name: "Admin" },
}

public configData: any = {
  baseUrl: "http://3.15.236.141:5005/",
  endpoint: "uploads",
  size: "51200", // kb
  format: ["jpg", "jpeg", "png"], // use all small font
  type: "testimonial-image",
  path: "testimonial",
  prefix: "testimonial-image_"
}

/* Config for add and edit end */

  constructor( private router : Router , private activatedRoute : ActivatedRoute ,private cookieService : CookieService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params._id) {
        this.activatedRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.testimonialData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
        });
      }
    });
  }

}
