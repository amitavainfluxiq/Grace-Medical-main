import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hometestimonial',
  templateUrl: './hometestimonial.component.html',
  styleUrls: ['./hometestimonial.component.css']
})
export class HometestimonialComponent implements OnInit {
  
  public TestimonialListArray: any = [];
  public p_id: any;

  constructor(private cdr: ChangeDetectorRef, public apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let data: any = {
      source:"testimonial_view",
      endpoint: "datalistwithouttoken"
      // token: this.cookieService.get('jwtToken')

    }
    this.apiService.getDatalist(data).subscribe((result: any)=>{
      //console.log(result.res);
      this.TestimonialListArray= result.res;
      //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.TestimonialListArray);
    });
   
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
  

  showmore(index:any) {
    this.p_id = index._id;
   }

}
