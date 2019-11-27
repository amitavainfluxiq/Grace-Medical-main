import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-hometestimonial',
  templateUrl: './hometestimonial.component.html',
  styleUrls: ['./hometestimonial.component.css']
})
export class HometestimonialComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

}
