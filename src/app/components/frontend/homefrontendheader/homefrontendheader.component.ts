import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homefrontendheader',
  templateUrl: './homefrontendheader.component.html',
  styleUrls: ['./homefrontendheader.component.css']
})
export class HomefrontendheaderComponent implements OnInit {

  status: boolean = false;
  clickEvent(){
    this.status = !this.status;
  }


  constructor() { }

  ngOnInit() {


  }


}
