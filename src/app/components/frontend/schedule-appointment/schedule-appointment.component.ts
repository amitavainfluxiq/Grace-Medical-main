import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent implements OnInit {

  constructor( public apiService: ApiService, private readonly meta: MetaService) { window.scrollTo(500, 0);

    this.meta.setTitle('Grace Medical - Schedule Appointment');
    this.meta.setTag('og:description', 'Grace Madical Schedule Appointment');
    this.meta.setTag('twitter:description', 'Grace Madical Schedule Appointment');
    this.meta.setTag('og:keyword', 'Schedule Appointment, schedule appointment, appointment, schedule');
    this.meta.setTag('twitter:keyword', 'Schedule Appointment, schedule appointment, appointment, schedule');
    this.meta.setTag('og:title', 'Grace Medical - Schedule Appointment');
    this.meta.setTag('twitter:title', 'Grace Medical - Schedule Appointment');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');

  }

  ngOnInit() {
  }

}
