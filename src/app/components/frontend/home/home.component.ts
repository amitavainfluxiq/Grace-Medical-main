import { Component, OnInit } from '@angular/core';

import { MetaService } from '@ngx-meta/core';
import {ApiService} from "../../../api.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentfrontend implements OnInit {

  constructor( public apiService: ApiService, private readonly meta: MetaService) { window.scrollTo(500, 0);

    this.meta.setTitle('Grace Medical - Specializing in You');
    this.meta.setTag('og:description', 'Grace Medical brings Top-Quality Medical Care and Preventative Healthcare Services focused on keeping patients in premium health condition through focused patient-care and yearly check-ups.');
    this.meta.setTag('twitter:description', 'Grace Medical brings Top-Quality Medical Care and Preventative Healthcare Services focused on keeping patients in premium health condition through focused patient-care and yearly check-ups.');
    this.meta.setTag('og:keyword', 'Grace Medical, Top-Quality Medical Care, Preventative Healthcare Services, Focused Patient-Care');
    this.meta.setTag('twitter:keyword', 'Grace Medical, Top-Quality Medical Care, Preventative Healthcare Services, Focused Patient-Care');
    this.meta.setTag('og:title', 'Grace Medical - Specializing in You');
    this.meta.setTag('twitter:title', 'Grace Medical - Specializing in You');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');

  }



  ngOnInit() {

    let slideIndex = 0;
    showSlides();
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
      let dots = document.getElementsByClassName("dot") ;
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");

      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 4500); // Change image every 2 seconds
    }






  }

}
