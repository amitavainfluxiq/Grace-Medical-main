import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public logo: any = '../../assets/images/logo2.png';      // logo url
  public fromTitle: any = "Login";    // This is a From Title

  public fullUrl: any = this.apiService.serverUrl;
  public endpoint: any = "login";  // login endpoint

  public buttonName: any = 'Login';
  public signUpRouteingUrl: any = {
    "path": "signup",
    "buttonName": "Sign Up",
    "customLink": "",
    "customURl": ""
  };

  public forgetRouteingUrl: any = {
    "path": "forgetpassword",
    "buttonName": "Forget Password",
    "customLink": "",
    "customURl": ""
  };
  public routerStatus: any;
  public userData: any = {};

  constructor(private readonly meta: MetaService, public apiService: ApiService, public router: Router, public cookieService: CookieService) {


    this.meta.setTitle('Grace Medica - Login');
    this.meta.setTag('og:description', 'Grace Medic Login');
    this.meta.setTag('twitter:description', 'Grace Medic Login');
    this.meta.setTag('og:keyword', 'Grace Medical Login, Login, Grace MedicalA');
    this.meta.setTag('twitter:keyword', 'Grace Medical Login, Login, Grace MedicalA');
    this.meta.setTag('og:title', 'Grace Medica - Login');
    this.meta.setTag('twitter:title', 'Grace Medica - Login');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');


    this.routerStatus = {           // this is use for if login succcess then navigate which page
      "data": [
        {
          "type": "admin",
          "routerNav": "admin_dashboard"
        },
        {
          // "type": "customer",
          // "routerNav": "customer-dashboard"
        },
        {
          // "type": "rep",
          // "routerNav": "rep-dashboard"
        }
      ]
    }

  }

  ngOnInit() {
  }



}
