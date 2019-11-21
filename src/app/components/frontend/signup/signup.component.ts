import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})

export class SignupComponent implements OnInit {
  public userType: any = 'admin';
  public logo: any = '../../assets/images/logo2.png';
  public modaleLogo: any = '../../assets/images/logo2.png';
  public forgetRouteingUrl: any = 'forgetpassword';
  public loginRouteingUrl: any = 'login';

  public formTitle: any = 'Sign Up';
  // public serverUrl: any = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/';
  public serverUrl: any = this.apiService.serverUrl;
  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    source:'user'
  };

  constructor(private readonly meta: MetaService, public apiService: ApiService) {window.scrollTo(500, 0);

    this.meta.setTitle('Grace Medica - Sign Up');
    this.meta.setTag('og:description', 'Grace Medic Sign Up');
    this.meta.setTag('twitter:description', 'Grace Medic Sign Up');
    this.meta.setTag('og:keyword', 'Grace Medical Sign Up, Sign Up, Grace MedicalA');
    this.meta.setTag('twitter:keyword', 'Grace Medical Sign Up, Sign Up, Grace MedicalA');
    this.meta.setTag('og:title', 'Grace Medica - Sign Up');
    this.meta.setTag('twitter:title', 'Grace Medica - Sign Up');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');
  }

  ngOnInit() {
  }

}
