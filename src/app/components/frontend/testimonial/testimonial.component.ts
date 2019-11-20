import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import {ApiService} from "../../../api.service";

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(private readonly meta: MetaService, public ApiService: ApiService) {

    this.meta.setTitle('Grace Medical - Testimonial');
    this.meta.setTag('og:description', 'Check out what our patients, as well as other industry veterans and professionals, have to say about Grace Medical and our Healthcare Services to understand the quality of our services better.');
    this.meta.setTag('twitter:description', 'Check out what our patients, as well as other industry veterans and professionals, have to say about Grace Medical and our Healthcare Services to understand the quality of our services better.');
    this.meta.setTag('og:keyword', 'grace Medical Testimonial, Grace Medical Patients’ Review, Grace Medical Customer Reviews');
    this.meta.setTag('twitter:keyword', 'grace Medical Testimonial, Grace Medical Patients’ Review, Grace Medical Customer Reviews');
    this.meta.setTag('og:title', 'Grace Medical - Testimonial');
    this.meta.setTag('twitter:title', 'Grace Medical - Testimonial');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');


  }

  ngOnInit() {
  }

}
