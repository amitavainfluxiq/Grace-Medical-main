import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/frontend/login/login.component';


// Grace Medical routing amitava

import { AppointmentsfrontendComponent } from './components/frontend/appointmentsfrontend/appointmentsfrontend.component';
import { HomeComponentfrontend } from './components/frontend/home/home.component';
import { OurphysiciansComponent } from './components/frontend/ourphysicians/ourphysicians.component';
import { ServicesComponent } from './components/frontend/services/services.component';
import { JournalsComponent } from './components/frontend/journals/journals.component';
import { ImagegalleryComponent } from './components/frontend/imagegallery/imagegallery.component';
import { VideogalleryComponent } from './components/frontend/videogallery/videogallery.component';
import { TestimonialComponent } from './components/frontend/testimonial/testimonial.component';
import { ContactusComponent } from './components/frontend/contactus/contactus.component';

import { ScheduleAppointmentComponent } from './components/frontend/schedule-appointment/schedule-appointment.component';

// Grace Medical routing admin
import { DashboardComponent } from './components/backend/admin-dashboard/dashboard/dashboard.component';


import { AdminDoctorsComponent } from './components/backend/admin-dashboard/admin-doctors/admin-doctors.component';
import { AdminPatientsComponent } from './components/backend/admin-dashboard/admin-patients/admin-patients.component';
import { ManageCategoryComponent } from './components/backend/admin-dashboard/manage-category/manage-category.component';
import { ManageLessonComponent } from './components/backend/admin-dashboard/manage-lesson/manage-lesson.component';
import { TrainingCenterComponent } from './components/backend/admin-dashboard/training-center/training-center.component';
import { TrainingReportComponent } from './components/backend/admin-dashboard/training-report/training-report.component';
import { AdminAppointmentsComponent } from './components/backend/admin-dashboard/admin-appointments/admin-appointments.component';
import { AdminSocialAdvoComponent } from './components/backend/admin-dashboard/admin-social-advo/admin-social-advo.component';
import { AdminArticleManagerComponent } from './components/backend/admin-dashboard/admin-article-manager/admin-article-manager.component';
import { AdminTestimonialComponent } from './components/backend/admin-dashboard/admin-testimonial/admin-testimonial.component';
import { AdminNewsletterComponent } from './components/backend/admin-dashboard/admin-newsletter/admin-newsletter.component';
import { AdminGalleryManagerComponent } from './components/backend/admin-dashboard/admin-gallery-manager/admin-gallery-manager.component';

import { OurphysiciansDetailComponent } from './components/frontend/ourphysicians-detail/ourphysicians-detail.component';

import { JournalsDetailComponent } from './components/frontend/journals-detail/journals-detail.component';

import { AddLessonComponent } from './components/backend/admin-dashboard/add-lesson/add-lesson.component';
import { EditCategoryComponent } from './components/backend/admin-dashboard/edit-category/edit-category.component';



import { AddArticleComponent } from './components/backend/admin-dashboard/add-article/add-article.component';
import { AddArticleCategoryComponent } from './components/backend/admin-dashboard/add-article-category/add-article-category.component';


import { AdminCategoryManagerComponent } from './components/backend/admin-dashboard/admin-category-manager/admin-category-manager.component';
import { AddMediaComponent } from './components/backend/admin-dashboard/add-media/add-media.component';

import { AdminSubscribersComponent } from './components/backend/admin-dashboard/admin-subscribers/admin-subscribers.component';

import { AdminNewsSettingsComponent } from './components/backend/admin-dashboard/admin-news-settings/admin-news-settings.component';
import { HomeblogComponent } from './components/frontend/homeblog/homeblog.component';
import { HomedoctorsComponent } from './components/frontend/homedoctors/homedoctors.component';
import { HometestimonialComponent } from './components/frontend/hometestimonial/hometestimonial.component';
import { HomeservicesComponent } from './components/frontend/homeservices/homeservices.component';
import { HomegalleryComponent } from './components/frontend/homegallery/homegallery.component';

const routes: Routes = [

  {path: 'home', component: HomeComponentfrontend},
  {path: '', component: HomeComponentfrontend},
  
  {path: 'login', component: LoginComponent},
  {path: 'ourphysicians', component: OurphysiciansComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'journals', component: JournalsComponent},
  {path: 'imagegallery', component: ImagegalleryComponent},
  {path: 'videogallery', component: VideogalleryComponent},
  {path: 'testimonial', component: TestimonialComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'appointment', component: AppointmentsfrontendComponent},
  {path: 'sacheduleappointment', component: ScheduleAppointmentComponent},
  {path: 'ourphysiciansdetail', component: OurphysiciansDetailComponent},
  {path: 'journalsdetail', component: JournalsDetailComponent},

  {path: 'add_lesson', component: AddLessonComponent},
  {path: 'edit_category', component: EditCategoryComponent},


  {path: 'add_article', component: AddArticleComponent},
  {path: 'add_category', component: AddArticleCategoryComponent},
  {path: 'admin_category_manager', component: AdminCategoryManagerComponent},
  {path: 'add_media', component: AddMediaComponent},
  {path: 'admin_subscribers', component: AdminSubscribersComponent},
  {path: 'admin_news_settings', component: AdminNewsSettingsComponent},


  {path: 'admin_dashboard', component: DashboardComponent},


  {path: 'admin_doctors', component: AdminDoctorsComponent},
  {path: 'admin_patients', component: AdminPatientsComponent},
  {path: 'manage_category', component: ManageCategoryComponent},
  {path: 'manage_lesson', component: ManageLessonComponent},
  {path: 'training_center', component: TrainingCenterComponent},
  {path: 'training_report', component: TrainingReportComponent},
  {path: 'admin_appointments', component: AdminAppointmentsComponent},
  {path: 'admin_social_advo', component: AdminSocialAdvoComponent},
  {path: 'admin_article_manager', component: AdminArticleManagerComponent},
  {path: 'admin_testimonial', component: AdminTestimonialComponent},
  {path: 'admin_newsletter', component: AdminNewsletterComponent},
  {path: 'admin_gallery_manager', component: AdminGalleryManagerComponent},
  {path: 'homeblog', component: HomeblogComponent},
  {path: 'homedoctors', component: HomedoctorsComponent},
  {path: 'hometestimonial', component: HometestimonialComponent},
  {path: 'homeservices', component: HomeservicesComponent},
  {path: 'homegallery', component: HomegalleryComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
