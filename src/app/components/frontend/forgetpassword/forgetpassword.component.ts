import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: 'forgetpassword.component.html',
  styleUrls: ['forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  public logo: any = '../../assets/images/logo2.png';
  public loginRouteingUrl: any = {
    "path":"",
    "buttonName":"Login",
    "customLink":"/login",
    "customURl":""
  };
  public signUpRouteingUrl: any = {
    "path":"",
    "buttonName":"Sign Up",
    "customLink":"/signup",
    "customURl":""
  };
  public buttonName: any = 'Forget Password';
  // public signUpRouteingUrl: any = 'sign-up';
  public formTitle: any = 'Forget Password';
  public serverUrl: any = this.apiService.serverUrl;
  public addEndpoint: any = {
    endpoint:'forgetpassword'
  };


  constructor(private readonly meta: MetaService, public apiService: ApiService) {window.scrollTo(500, 0);

    this.meta.setTitle('Grace Medica - Forget Password');
    this.meta.setTag('og:description', 'Grace Medic Forget Password');
    this.meta.setTag('twitter:description', 'Grace Medic Forget Password');
    this.meta.setTag('og:keyword', 'Grace Medical Forget Password, Forget Password, Grace MedicalA');
    this.meta.setTag('twitter:keyword', 'Grace Medical Forget Password, Forget Password, Grace MedicalA');
    this.meta.setTag('og:title', 'Grace Medica - Forget Password');
    this.meta.setTag('twitter:title', 'Grace Medica - Forget Password');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');

  }

  ngOnInit() {
  }

}
