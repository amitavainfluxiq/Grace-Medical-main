import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../../../environments/environment.dev';

@Component({
  selector: 'app-listing-testimonial',
  templateUrl: './listing-testimonial.component.html',
  styleUrls: ['./listing-testimonial.component.css']
})
export class ListingTestimonialComponent implements OnInit {

 /************** lib list setup start here *************/
 public testimonialListConfig:any = {
  // apiBaseUrl: "https://r245816wug.execute-api.us-east-1.amazonaws.com/dev/api/",
  apiBaseUrl : environment.API_URL,
  listEndPoint: "datalist",
  datasource: "",
  tableName: "testimonial",
  updateurl: "addorupdatedata",
  editUrl: "manage-testimonial/edit",
  jwtToken: "",   
  deleteEndPoint: "deletesingledata",
  addLink: "/manage-testimonial/add",
  view: "testimonial_view"
}

constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService) { 

this.activatedRoute.data.subscribe(resolveData => {
  this.testimonialListConfig.datasource = resolveData.testimonialList.res;
 // console.log('---------------kbtest testimonialList-------------', this.testimonialListConfig.datasource );
  this.testimonialListConfig.jwtToken = this.cookieService.get('jwtToken');
  
});
}

ngOnInit() {
}

}
