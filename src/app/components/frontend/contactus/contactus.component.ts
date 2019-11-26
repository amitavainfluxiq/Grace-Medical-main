import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import {ApiService} from "../../../api.service";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public formTitle: any = "";      // Enter the Forl Title
  public pageUrl: any = 'home';
  public modaleLogo: any = '';
  public serverUrl: any = this.ApiService.serverUrl ;


  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    source:'contactusForm'

  };
  public getDataUrl: any = 'datalist';
  public routeingUrl: any = 'dashboard';
  constructor(private readonly meta: MetaService, public ApiService: ApiService) {
    window.scrollTo(500, 0);
    this.meta.setTitle('Grace Medical - Contact Us');
    this.meta.setTag('og:description', 'At Grace Medical, we are always available to our patients and customers, aiding them with expert advice and counsel about the Healthcare industry and services, whenever they are in need. Contact Us TODAY and we will be happy to respond to your queries!');
    this.meta.setTag('twitter:description', 'At Grace Medical, we are always available to our patients and customers, aiding them with expert advice and counsel about the Healthcare industry and services, whenever they are in need. Contact Us TODAY and we will be happy to respond to your queries!');
    this.meta.setTag('og:keyword', 'Grace Medical Contact Us, Contact Us, Grace Medical');
    this.meta.setTag('twitter:keyword', 'Grace Medical Contact Us, Contact Us, Grace Medical');
    this.meta.setTag('og:title', 'Grace Medical - Contact Us');
    this.meta.setTag('twitter:title', 'Grace Medical - Contact Us');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');

  }

  ngOnInit() {
  }

}





