import { Component, OnInit, HostListener, Inject, ViewChild  } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import  {ApiService} from '../../../api.service';
import {CookieService} from "ngx-cookie-service";


export interface DialogData {}

@Component({
  selector: 'app-homefrontendfooter',
  templateUrl: './homefrontendfooter.component.html',
  styleUrls: ['./homefrontendfooter.component.css']
})

export class HomefrontendfooterComponent implements OnInit {

  myform: FormGroup;

  public data: any;
  public serverUrl: any;
  // public tokenViaCookie

  constructor(public router: Router, public route: ActivatedRoute, public dialog: MatDialog, public formbuilder: FormBuilder, public apiService: ApiService, public activeroute: ActivatedRoute, public cookie: CookieService) {

    this.serverUrl = apiService.serverUrl;
    console.log("souresh",this.serverUrl);
    this.myform = this.formbuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],

    })


  }

  ngOnInit() {
  }


  doSubmit() {
    console.log('do Submit');
    // this.data = this.myform.value;
    // console.log(this.data);
   // this.newslatterViewModal(this.data);


    this.data = this.myform.get('email').value;
    this.cookie.set('email_modal',this.data);
    //console.log('test amitava',this.dataemail);

    for (let i in this.myform.controls) {
      this.myform.controls[i].markAsTouched();
    }
    if (this.myform.valid) {
      this.newslatterViewModal(this.data);
      let link = '';
      let data = {data: this.myform.value};
      this.apiService.postdata(data).subscribe(res => {

        let result: any = {};
        result = res;
        // console.log(result);
        if (result.status == 'success') {
          /*  this.newslatterViewModal();
          this.myform.reset();
          // this.opencontactDialog();
          /* const dialogRef = this.dialog.open(SubmitpopupComponent);*/

          // this.inputUntouch(this.myform,'email');

          this.myform.controls['email'].updateValueAndValidity();

        }
      })

    }

  }

  newslatterViewModal(deta:any){

    const dialogGenreRef = this.dialog.open(NewslatterDialogComponent, {
      panelClass: ['modal-sm', 'infomodal'],
      //disableClose: true,
      //data: {name:'testname', email:deta.email, phone:'999999999', company:'companyname'}
    });

    dialogGenreRef.afterClosed().subscribe(result => {
    });

  }
}


@Component({
  selector: 'newslatter-dialog',
  templateUrl: 'newsletter-dialog.html',
})
export class NewslatterDialogComponent {

  public myformnews: FormGroup




  public serverUrl:any;
  public tokenViaCookie :any;
  constructor(public dialogRef: MatDialogRef<NewslatterDialogComponent>,

              @Inject(MAT_DIALOG_DATA) public data: DialogData, public formbuilder:FormBuilder, public dialog:MatDialog, public apiService: ApiService,public cookie : CookieService ) {
    this.serverUrl = apiService.serverUrl;
    this.tokenViaCookie = cookie.get('jwtToken');
    this.myformnews = this.formbuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      company: ['', Validators.required],

    })

// this.myformnews.value.email.setvalue();

      this.myformnews.patchValue({
            email: this.cookie.get('email_modal'),

      });


  }



  public onNoClick(): void {
    this.dialogRef.close();
  }


  donewsSubmit() {

    console.log('ok');
    this.data = this.myformnews.value;
    console.log(this.data);


    for (let i in this.myformnews.controls) {
      this.myformnews.controls[i].markAsTouched();
    }
    if (this.myformnews.valid) {

      this.newslattersuccessViewModal();

      setTimeout(()=>{
        this.onNoClick();

      },2000);

      // let  link = this.serverUrl +;
      let data = {
        source:"newsletter",
        token : this.tokenViaCookie,
        data: this.myformnews.value
      };
      this.apiService.addDataWithoutToken(data,'addorupdatedata').subscribe(res => {


        let result: any = {};
        result = res;
        console.log(res);
        if (result.status == 'success') {

          this.myformnews.reset();




          this.myformnews.controls['email'].updateValueAndValidity();
          this.myformnews.controls['name'].updateValueAndValidity();
          this.myformnews.controls['phone'].updateValueAndValidity();
          this.myformnews.controls['company'].updateValueAndValidity();






        }


      })

    }

  }



  newslattersuccessViewModal(){

    const dialogGenreRef = this.dialog.open(NewslattersuccessDialogComponent, {
      panelClass: ['modal-sm', 'infomodal'],
      //disableClose: true,
    });

    dialogGenreRef.afterClosed().subscribe(result => {
    });
    setTimeout(function(){
      dialogGenreRef.close();
    }, 2000);
  }
}


// newslatter success dialog component
@Component({
  selector: 'newslatter-success-dialog',
  templateUrl: 'newsletter-success-dialog.html',
})
export class NewslattersuccessDialogComponent {

  public myformnews: FormGroup

  constructor(public dialogRef: MatDialogRef<NewslattersuccessDialogComponent>,
              /* @Inject(MAT_DIALOG_DATA) public data: DialogData*/) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
