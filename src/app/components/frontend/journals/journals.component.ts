
import { Component, OnInit} from '@angular/core';
// import { MatAccordion, MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
// import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
// import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
// import { NestedTreeControl } from '@angular/cdk/tree';
// import { BehaviorSubject, observable, of as observableOf } from 'rxjs';


import { MetaService } from '@ngx-meta/core';
import {ApiService} from "../../../api.service";

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {

  
  public journalList: any;
  public indexval:any=4;
  public journalListing:any;

  constructor( public apiService: ApiService, private readonly meta: MetaService, private activatedRoute: ActivatedRoute, public router: Router, private cookieservice: CookieService) { window.scrollTo(500, 0);

    this.meta.setTitle('Grace Medical - Medical Journals');
    this.meta.setTag('og:description', 'Stay updated with all the new developments taking place in the Healthcare and Medical industry with the latest Medical Journals maintained by some of the most esteemed professionals of the Medical World.');
    this.meta.setTag('twitter:description', 'Stay updated with all the new developments taking place in the Healthcare and Medical industry with the latest Medical Journals maintained by some of the most esteemed professionals of the Medical World.');
    this.meta.setTag('og:keyword', 'Medical Journals, Journals of the Healthcare Industry, Medical Industry Journals');
    this.meta.setTag('twitter:keyword', 'Medical Journals, Journals of the Healthcare Industry, Medical Industry Journals');
    this.meta.setTag('og:title', 'Grace Medical - Medical Journals');
    this.meta.setTag('twitter:title', 'Grace Medical - Medical Journals');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');

  }

  ngOnInit() {
     //**all blog category and blog list from resolve in routing**//

     this.activatedRoute.data.forEach((data: any) => {
      this.journalList = data;
      //console.log('>>>>>>>>>>>>>>',this.journalList)

    })

    //****total blog list****//
    this.journalListing = this.journalList.journalListData.blogs
    //console.log('---------------',this.journalListing)
    

  }

}
