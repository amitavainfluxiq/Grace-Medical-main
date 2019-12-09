import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeblog',
  templateUrl: './homeblog.component.html',
  styleUrls: ['./homeblog.component.css']
})
export class HomeblogComponent implements OnInit {

  public journalList: any = []; 
  public indexval:any=3;
  public journalListing:any;


  

  constructor(public apiservice: ApiService, private router: Router) { 
    
     /*------------Blog List-----*/
     let data: any = {
      source:"blogs_view"
    }

    this.apiservice.postDatawithoutToken("datalistwithouttoken", data).subscribe((result: any)=>{
      // console.log(result.res);
      this.journalListing = result.res;
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.journalListing);
    });


  }

  ngOnInit() {
  }


    //***********you might like list view in blog detail************//
    journalsdetail(val:any){
      // console.log(val)
      this.router.navigateByUrl('/journalsdetail/' +val)
    }


}
