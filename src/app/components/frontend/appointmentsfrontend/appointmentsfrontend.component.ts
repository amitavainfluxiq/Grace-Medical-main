import { Component, OnInit } from '@angular/core';

import { MetaService } from '@ngx-meta/core';
import {ApiService} from "../../../api.service";


@Component({
  selector: 'app-appointmentsfrontend',
  templateUrl: './appointmentsfrontend.component.html',
  styleUrls: ['./appointmentsfrontend.component.css']
})
export class AppointmentsfrontendComponent implements OnInit {

  constructor( public apiService: ApiService, private readonly meta: MetaService) { window.scrollTo(500, 0);

    this.meta.setTitle('Grace Medical - Make An Appointment');
    this.meta.setTag('og:description', 'Schedule or Make An Appointment with a Doctor of your choice while completing the ideal preparation before the appointment. Also, learn about the various Healthcare services that can be covered through Insurance through Expert Support.');
    this.meta.setTag('twitter:description', 'Schedule or Make An Appointment with a Doctor of your choice while completing the ideal preparation before the appointment. Also, learn about the various Healthcare services that can be covered through Insurance through Expert Support.');
    this.meta.setTag('og:keyword', 'Make An Appointment, Schedule Doctor Appointment, Check Your Insurance, Expert Healthcare Support and Guidance');
    this.meta.setTag('twitter:keyword', 'Make An Appointment, Schedule Doctor Appointment, Check Your Insurance, Expert Healthcare Support and Guidance');
    this.meta.setTag('og:title', 'Grace Medical - Make An Appointment');
    this.meta.setTag('twitter:title', 'Grace Medical - Make An Appointment');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');

  }

  ngOnInit() {
  }

}
