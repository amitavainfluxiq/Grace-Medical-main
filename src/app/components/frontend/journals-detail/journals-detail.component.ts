import { Component, OnInit } from '@angular/core';

import { MetaService } from '@ngx-meta/core';
import {ApiService} from "../../../api.service";


@Component({
  selector: 'app-journals-detail',
  templateUrl: './journals-detail.component.html',
  styleUrls: ['./journals-detail.component.css']
})
export class JournalsDetailComponent implements OnInit {

  constructor( public apiService: ApiService, private readonly meta: MetaService) { window.scrollTo(500, 0);

    this.meta.setTitle('Grace Medical - Medical Journals Detail');
    this.meta.setTag('og:description', 'Stay updated with all the new developments taking place in the Healthcare and Medical industry with the latest Medical Journals maintained by some of the most esteemed professionals of the Medical World.');
    this.meta.setTag('twitter:description', 'Stay updated with all the new developments taking place in the Healthcare and Medical industry with the latest Medical Journals maintained by some of the most esteemed professionals of the Medical World.');
    this.meta.setTag('og:keyword', 'Medical Journals, Journals of the Healthcare Industry, Medical Industry Journals');
    this.meta.setTag('twitter:keyword', 'Medical Journals, Journals of the Healthcare Industry, Medical Industry Journals');
    this.meta.setTag('og:title', 'Grace Medical - Medical Journals Detail');
    this.meta.setTag('twitter:title', 'Grace Medical - Medical Journals Detail');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');

  }

  ngOnInit() {
  }

}
