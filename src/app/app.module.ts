import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/frontend/login/login.component';
import { DemoMaterialModule } from './modules/materialModule';


import { HomeComponentfrontend } from './components/frontend/home/home.component';
import { HomefrontendheaderComponent } from './components/frontend/homefrontendheader/homefrontendheader.component';
import { HomefrontendfooterComponent } from './components/frontend/homefrontendfooter/homefrontendfooter.component';
import { OurphysiciansComponent } from './components/frontend/ourphysicians/ourphysicians.component';
import { ServicesComponent } from './components/frontend/services/services.component';
import { JournalsComponent } from './components/frontend/journals/journals.component';
import { ImagegalleryComponent, GalleryZoom } from './components/frontend/imagegallery/imagegallery.component';
import { VideogalleryComponent, VideoZoom } from './components/frontend/videogallery/videogallery.component';
import { TestimonialComponent } from './components/frontend/testimonial/testimonial.component';
import { ContactusComponent } from './components/frontend/contactus/contactus.component';
import { AppointmentsfrontendComponent } from './components/frontend/appointmentsfrontend/appointmentsfrontend.component';
import { AdminfooterComponent } from './components/backend/admin-dashboard/adminfooter/adminfooter.component';
import { DashboardComponent } from './components/backend/admin-dashboard/dashboard/dashboard.component';

import { AdminheaderComponent } from './components/backend/admin-dashboard/adminheader/adminheader.component';
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
import { ScheduleAppointmentComponent } from './components/frontend/schedule-appointment/schedule-appointment.component';
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



import { MatCarouselModule } from '@ngmodule/material-carousel';

import { CookieService } from 'ngx-cookie-service';

import {ListingModule} from "listing-angular7";



import { NgxUploaderModule } from 'ngx-uploader';
import { ContactusModule } from 'contactus';
import { HomeblogComponent } from './components/frontend/homeblog/homeblog.component';
import { HomeservicesComponent } from './components/frontend/homeservices/homeservices.component';
import { HomedoctorsComponent } from './components/frontend/homedoctors/homedoctors.component';
import { HometestimonialComponent } from './components/frontend/hometestimonial/hometestimonial.component';
import { HomegalleryComponent } from './components/frontend/homegallery/homegallery.component';


import { MetaModule } from '@ngx-meta/core';

import { ApiService } from './api.service';
import {ServicelibModule} from 'servicelib';
import {FileUploadModule} from 'file-upload';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { LoginModule } from 'login';
import { ForgetpasswordComponent } from './components/frontend/forgetpassword/forgetpassword.component';
import { SignupComponent } from './components/frontend/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    AdminheaderComponent,

    HomeComponentfrontend,
    HomefrontendheaderComponent,
    HomefrontendfooterComponent,
    OurphysiciansComponent,
    ServicesComponent,
    JournalsComponent,
    ImagegalleryComponent,
    VideogalleryComponent,
    TestimonialComponent,
    ContactusComponent,
    AppointmentsfrontendComponent,
    AdminfooterComponent,
    DashboardComponent,
    AdminDoctorsComponent,
    AdminPatientsComponent,
    ManageCategoryComponent,
    ManageLessonComponent,
    TrainingCenterComponent,
    TrainingReportComponent,
    AdminAppointmentsComponent,
    AdminSocialAdvoComponent,
    AdminArticleManagerComponent,
    AdminTestimonialComponent,
    AdminNewsletterComponent,
    AdminGalleryManagerComponent,
    ScheduleAppointmentComponent,
    OurphysiciansDetailComponent,
    JournalsDetailComponent,
    AddLessonComponent,
    EditCategoryComponent,
    AddArticleComponent,
    AddArticleCategoryComponent,
    AdminCategoryManagerComponent,
    AddMediaComponent,
    AdminSubscribersComponent,
    AdminNewsSettingsComponent,
    HomeblogComponent,
    HomeservicesComponent,
    HomedoctorsComponent,
    HometestimonialComponent,
    HomegalleryComponent,

    GalleryZoom,
    VideoZoom,
    ForgetpasswordComponent,
    SignupComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatCarouselModule.forRoot(),
    ContactusModule,
    ListingModule,
    ServicelibModule,
    NgxUploaderModule,
    FileUploadModule,
    CKEditorModule,
    AppRoutingModule,MetaModule.forRoot(), BrowserAnimationsModule,

    LoginModule
  ],
  entryComponents: [GalleryZoom, VideoZoom],
  providers: [CookieService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
