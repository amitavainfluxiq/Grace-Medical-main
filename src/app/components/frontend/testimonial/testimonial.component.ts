import { Component, OnInit, Inject } from '@angular/core';
// import * as moment from 'moment'; // add this 1 of 4
import { MetaService } from '@ngx-meta/core';
import {ApiService} from "../../../api.service";
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

export interface DialogData {data: any;} 

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  public TestimonialList: any ='';
  
  public indexval: any = 6;

  safeSrc: SafeResourceUrl;

  constructor(private readonly meta: MetaService, public ApiService: ApiService,private activatedRoute : ActivatedRoute,  private sanitizer: DomSanitizer, public dialog:MatDialog, private router: Router) {

    

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

    // this.dataformate = moment();
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      //console.log(resolveData.serviceList.res)
      this.TestimonialList = resolveData.testimonialList.res;
      console.log("true data" + this.TestimonialList)
    });
  } 


  //*********view Video modal section***********//

  openvideourl(val:any){

    let url:any;
    url="https://www.youtube.com/embed/";
     // console.log('video url....>',url+val);
     this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(url + val);
     
     // console.log('>>>>>>>>>>>>>>>>>>',this.safeSrc)
     const dialogRef = this.dialog.open(CommonTestimonialVideoModalComponent, {
       panelClass:['modal-md','success-modal'],       
       width:'450px',
       data:this.safeSrc, 
     });
     dialogRef.afterClosed().subscribe(result => {  
     });
   }

//********* end Video modal section***********//

  testimonialloadmore() {
    this.indexval = this.indexval + 3;
    // console.log(this.indexval);
  }

}



//**********video modal component************//

@Component({
  selector:'app-commontestimonialvideomodal',
  templateUrl:'./commontestimonialvideomodal.html'
})
export class CommonTestimonialVideoModalComponent {
  constructor( public dialogRef: MatDialogRef<CommonTestimonialVideoModalComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData){
  }
}