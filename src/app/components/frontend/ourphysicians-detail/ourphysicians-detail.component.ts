import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import {ApiService} from "../../../api.service";


@Component({
  selector: 'app-ourphysicians-detail',
  templateUrl: './ourphysicians-detail.component.html',
  styleUrls: ['./ourphysicians-detail.component.css']
})
export class OurphysiciansDetailComponent implements OnInit {

  constructor( public apiService: ApiService, private readonly meta: MetaService) { window.scrollTo(500, 0);

    this.meta.setTitle('Grace Medical - Find A Doctor!');
    this.meta.setTag('og:description', 'Use refined Search Parameters to find the perfect doctor for your precise Medical needs. Find physicians and doctors by Name, Location, and Speciality and reduce time, money and effort spent towards getting to the practitioner of your choice.');
    this.meta.setTag('twitter:description', 'Use refined Search Parameters to find the perfect doctor for your precise Medical needs. Find physicians and doctors by Name, Location, and Speciality and reduce time, money and effort spent towards getting to the practitioner of your choice.');
    this.meta.setTag('og:keyword', 'Find A Doctor, Doctor by Name, Doctor by Location, Doctor by Speciality');
    this.meta.setTag('twitter:keyword', 'Find A Doctor, Doctor by Name, Doctor by Location, Doctor by Speciality');
    this.meta.setTag('og:title', 'Grace Medical - Find A Doctor!');
    this.meta.setTag('twitter:title', 'Grace Medical - Find A Doctor!');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');

  }

  ngOnInit() {
  }

}
