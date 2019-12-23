import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/frontend/login/login.component';
import { DemoMaterialModule } from './modules/materialModule';


import { HomeComponentfrontend } from './components/frontend/home/home.component';
import { HomefrontendheaderComponent } from './components/frontend/homefrontendheader/homefrontendheader.component';
import { HomefrontendfooterComponent, NewslatterDialogComponent, NewslattersuccessDialogComponent } from './components/frontend/homefrontendfooter/homefrontendfooter.component';
import { OurphysiciansComponent } from './components/frontend/ourphysicians/ourphysicians.component';
 
import { ServicesComponent, ServicesModal } from './components/frontend/services/services.component';
 
import { JournalsComponent, CommonVideoModalComponent } from './components/frontend/journals/journals.component';
import { ImagegalleryComponent, GalleryZoom } from './components/frontend/imagegallery/imagegallery.component';
import { VideogalleryComponent, VideoZoom } from './components/frontend/videogallery/videogallery.component';
import { TestimonialComponent, CommonTestimonialVideoModalComponent } from './components/frontend/testimonial/testimonial.component';
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
 
import { AdminGalleryManagerComponent } from './components/backend/admin-dashboard/admin-gallery-manager/admin-gallery-manager.component';
import { ScheduleAppointmentComponent } from './components/frontend/schedule-appointment/schedule-appointment.component';
import { OurphysiciansDetailComponent } from './components/frontend/ourphysicians-detail/ourphysicians-detail.component';
import { JournalsDetailComponent, VideoModalComponent } from './components/frontend/journals-detail/journals-detail.component';
import { AddLessonComponent } from './components/backend/admin-dashboard/add-lesson/add-lesson.component';
import { EditCategoryComponent } from './components/backend/admin-dashboard/edit-category/edit-category.component';

import { AddArticleComponent } from './components/backend/admin-dashboard/add-article/add-article.component';
import { AddArticleCategoryComponent } from './components/backend/admin-dashboard/add-article-category/add-article-category.component';
import { AdminCategoryManagerComponent } from './components/backend/admin-dashboard/admin-category-manager/admin-category-manager.component';
import { AddMediaComponent } from './components/backend/admin-dashboard/add-media/add-media.component';
import { AdminSubscribersComponent } from './components/backend/admin-dashboard/admin-subscribers/admin-subscribers.component';
 


import { NewsletterlistsComponent } from './components/backend/admin-dashboard/newsletterlists/newsletterlists.component';

import { AddEditNewsletterComponent } from './components/backend/admin-dashboard/newsletterlists/add-edit-newsletter/add-edit-newsletter.component';
 
import { AddEditSubscriberComponent } from './components/backend/admin-dashboard/newsletterlists/add-edit-subscriber/add-edit-subscriber.component';
import { AddEditSubscriberGroupComponent } from './components/backend/admin-dashboard/newsletterlists/add-edit-subscriber-group/add-edit-subscriber-group.component';
 
 import { AddEditTestemailComponent } from './components/backend/admin-dashboard/newsletterlists/add-edit-testemail/add-edit-testemail.component';

 import { AddEditSenderappComponent } from './components/backend/admin-dashboard/newsletterlists/add-edit-senderapp/add-edit-senderapp.component';
 

import { ListingNewsletterComponent } from './components/backend/admin-dashboard/newsletterlists/listing-newsletter/listing-newsletter.component';

import { LisitngTestemailappComponent } from './components/backend/admin-dashboard/newsletterlists/lisitng-testemailapp/lisitng-testemailapp.component';

import { ListingSenderappComponent } from './components/backend/admin-dashboard/newsletterlists/listing-senderapp/listing-senderapp.component';

import { ListingSubscriptionComponent } from './components/backend/admin-dashboard/newsletterlists/listing-subscription/listing-subscription.component';

import { ListingSubcategoryComponent } from './components/backend/admin-dashboard/newsletterlists/listing-subcategory/listing-subcategory.component'; 




import { MatCarouselModule } from '@ngmodule/material-carousel';

import { CookieService } from 'ngx-cookie-service';

import {ListingModule} from "listing-angular7";



import { NgxUploaderModule } from 'ngx-uploader';
import { ContactusModule } from 'contactus';

import { HomeblogComponent } from './components/frontend/homeblog/homeblog.component';
import { HomeservicesComponent, ServicesModalhome } from './components/frontend/homeservices/homeservices.component';
import { HomedoctorsComponent } from './components/frontend/homedoctors/homedoctors.component';
import { HometestimonialComponent } from './components/frontend/hometestimonial/hometestimonial.component';
import { HomegalleryComponent } from './components/frontend/homegallery/homegallery.component';


import { MetaModule } from '@ngx-meta/core';

import { ApiService } from './api.service';

import { FileUploadModule } from 'file-upload-lib-influxiq';

import { NewsTitleModule } from 'news-title-lib-influxiq';

// import {FileUploadModule} from 'file-upload';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { LoginModule } from 'login';
// import { LoginModule } from 'login-lib-influxiq';
import { ForgetpasswordComponent } from './components/frontend/forgetpassword/forgetpassword.component';
import { SignupComponent } from './components/frontend/signup/signup.component';


/** services **/
// import {ServicelibModule} from 'servicelib';
import { ServicelibModule } from 'service-lib-influxiq';
import { AddEditServiceComponent } from './components/backend/managewebsites/service/add-edit-service/add-edit-service.component';
import { ListingServiceComponent } from './components/backend/managewebsites/service/listing-service/listing-service.component';


/** blogs **/
// import { BlogModule } from 'blog';

import { BlogModule } from 'blog-lib-influxiq';
import { AddEditBlogcatComponent } from './components/backend/admin-dashboard/admin-article-manager/add-edit-blogcat/add-edit-blogcat.component';
import { ListingBlogcatComponent } from './components/backend/managewebsites/blogs/listing-blogcat/listing-blogcat.component';
import { AddEditBlogComponent } from './components/backend/admin-dashboard/admin-article-manager/add-edit-blog/add-edit-blog.component';
import { ListingBlogComponent } from './components/backend/managewebsites/blogs/listing-blog/listing-blog.component';


/** testimonial **/
// import { TestimonialModule } from 'testimonial';
import { TestimonialModule } from 'testimonial-lib-influxiq';
import { ListingTestimonialComponent } from './components/backend/managewebsites/testimonial/listing-testimonial/listing-testimonial.component';
import { AddEditTestimonialComponent } from './components/backend/managewebsites/testimonial/add-edit-testimonial/add-edit-testimonial.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AuthGuard } from './auth.guard';

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
 
    HomeblogComponent,
    HomeservicesComponent,
    HomedoctorsComponent,
    HometestimonialComponent,
    HomegalleryComponent,

    GalleryZoom,
    VideoZoom,
    ForgetpasswordComponent,
    SignupComponent,
    AddEditServiceComponent,
    ListingServiceComponent,
    AddEditBlogcatComponent,
    ListingBlogcatComponent,
    AddEditBlogComponent,
    ListingBlogComponent,
    ListingTestimonialComponent,
    AddEditTestimonialComponent,

    NewslatterDialogComponent,
    NewslattersuccessDialogComponent,
    CommonVideoModalComponent,
    CommonTestimonialVideoModalComponent,
    VideoModalComponent,

    
    ServicesModal,

    ServicesModalhome,

    NewsletterlistsComponent,
    AddEditNewsletterComponent,
    AddEditSubscriberComponent,
    AddEditSubscriberGroupComponent,
    AddEditTestemailComponent,
    AddEditSenderappComponent,
    ListingNewsletterComponent,
    LisitngTestemailappComponent,
    ListingSenderappComponent,
    ListingSubscriptionComponent,
    ListingSubcategoryComponent,

    CommonVideoModalComponent,

    CommonTestimonialVideoModalComponent,

    VideoModalComponent

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
    BlogModule,
    TestimonialModule,
    AppRoutingModule,MetaModule.forRoot(), BrowserAnimationsModule,

    LoginModule,
    NewsTitleModule,
      FormsModule,
      ReactiveFormsModule
  ], 
  entryComponents: [GalleryZoom, VideoZoom, NewslatterDialogComponent, NewslattersuccessDialogComponent, ServicesModal, ServicesModalhome, CommonVideoModalComponent, CommonTestimonialVideoModalComponent, CommonTestimonialVideoModalComponent],
  providers: [CookieService, ApiService,AuthGuard, CommonVideoModalComponent, CommonTestimonialVideoModalComponent, VideoModalComponent],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
