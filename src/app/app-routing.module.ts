import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/frontend/login/login.component';
import { ResolveService } from './resolve.service';
import { AuthGuard } from './auth.guard';
/*
import { AuthGuard } from './auth.guard';
import { ResolveService } from './resolve.service';
*/

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

 
import { HomeblogComponent } from './components/frontend/homeblog/homeblog.component';
import { HomedoctorsComponent } from './components/frontend/homedoctors/homedoctors.component';
import { HometestimonialComponent } from './components/frontend/hometestimonial/hometestimonial.component';
import { HomeservicesComponent } from './components/frontend/homeservices/homeservices.component';
import { HomegalleryComponent } from './components/frontend/homegallery/homegallery.component';


import { ForgetpasswordComponent } from './components/frontend/forgetpassword/forgetpassword.component';
import { SignupComponent } from './components/frontend/signup/signup.component';
import { AddEditServiceComponent } from './components/backend/managewebsites/service/add-edit-service/add-edit-service.component';
import { ListingServiceComponent } from './components/backend/managewebsites/service/listing-service/listing-service.component';
import { AddEditBlogcatComponent } from './components/backend/admin-dashboard/admin-article-manager/add-edit-blogcat/add-edit-blogcat.component';
import { ListingBlogComponent } from './components/backend/managewebsites/blogs/listing-blog/listing-blog.component';
// import { AddeditBlogmanagementComponent } from 'dist/blog/lib/addedit-blogmanagement/addedit-blogmanagement.component';
import { AddEditBlogComponent } from './components/backend/admin-dashboard/admin-article-manager/add-edit-blog/add-edit-blog.component';
import { ListingBlogcatComponent } from './components/backend/managewebsites/blogs/listing-blogcat/listing-blogcat.component';
import { AddEditTestimonialComponent } from './components/backend/managewebsites/testimonial/add-edit-testimonial/add-edit-testimonial.component';
import { ListingTestimonialComponent } from './components/backend/managewebsites/testimonial/listing-testimonial/listing-testimonial.component';





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



const routes: Routes = [

  {path: 'home', component: HomeComponentfrontend},
  {path: '', component: HomeComponentfrontend},
  
  {path: 'login', component: LoginComponent},
  {path: 'ourphysicians', component: OurphysiciansComponent},
  {
    path: 'service',
    component: ServicesComponent,
    resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'service_view', condition: {} }, endpoint: 'datalistwithouttoken' }
  },

  
  // {path: 'journals', component: JournalsComponent, resolve: { journalListData: ResolveService },
  // data: { requestcondition: { condition: { "limit": 1, "skip": 1 } }, endpoint: 'blogdata' }
  // },

  {path: 'journals', component: JournalsComponent},
  {path: 'journalsdetail/:_id', component: JournalsDetailComponent,
  resolve: {
    journalCatList: ResolveService
  },
  data:
  {
    requestcondition:
    {
      source: 'blogs_view', condition: {}
    }, endpoint: 'datalistwithouttoken'
  }
},

  {path: 'imagegallery', component: ImagegalleryComponent},
  {path: 'videogallery', component: VideogalleryComponent},

  {
    path: 'testimonial', component: TestimonialComponent,
    resolve: { testimonialList: ResolveService },
    data: { requestcondition: { source: 'testimonial_view', condition: {} }, endpoint: 'datalistwithouttoken' }
  },

  {path: 'contactus', component: ContactusComponent},
  {path: 'appointment', component: AppointmentsfrontendComponent},
  {path: 'sacheduleappointment', component: ScheduleAppointmentComponent},
  {path: 'ourphysiciansdetail', component: OurphysiciansDetailComponent},
  

  {path: 'add_lesson', component: AddLessonComponent},
  {path: 'edit_category', component: EditCategoryComponent},


  {path: 'add_article', component: AddArticleComponent},
  {path: 'add_category', component: AddArticleCategoryComponent},
  {path: 'admin_category_manager', component: AdminCategoryManagerComponent},
  {path: 'add_media', component: AddMediaComponent},
  {path: 'admin_subscribers', component: AdminSubscribersComponent},
  


  {path: 'admin_dashboard', component: DashboardComponent},


  {path: 'admin_doctors', component: AdminDoctorsComponent},
  {path: 'admin_patients', component: AdminPatientsComponent},
  {path: 'manage_category', component: ManageCategoryComponent},
  {path: 'manage_lesson', component: ManageLessonComponent},
  {path: 'training_center', component: TrainingCenterComponent},
  {path: 'training_report', component: TrainingReportComponent},
  {path: 'admin_appointments', component: AdminAppointmentsComponent},
  {path: 'admin_social_advo', component: AdminSocialAdvoComponent},

  {path: 'manage-article', component: AdminArticleManagerComponent, canActivate: [AuthGuard],
    resolve: { blogsList: ResolveService },
    data: {
      requestcondition: {
        source: 'blogs_view',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },

  {path: 'admin_testimonial', component: AdminTestimonialComponent},
  
  {path: 'admin_gallery_manager', component: AdminGalleryManagerComponent},
  {path: 'homeblog', component: HomeblogComponent},
  {path: 'homedoctors', component: HomedoctorsComponent},
  {path: 'hometestimonial', component: HometestimonialComponent},
  {path: 'homeservices', component: HomeservicesComponent},
  {path: 'homegallery', component: HomegalleryComponent},

  {path: 'forgetpassword', component: ForgetpasswordComponent},
  {path: 'signup', component: SignupComponent},


  /**Services**/
  { path: 'manage-service/add', component: AddEditServiceComponent },
  {
    path: 'manage-service/list',
    component: ListingServiceComponent,
    resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'service', condition: {} }, endpoint: 'datalist' }
  },
  {
    path: 'manage-service/edit/:_id',
    component: AddEditServiceComponent,
    resolve: { serviceList: ResolveService },
    data: { requestcondition: { source: 'service', condition: {} }, endpoint: 'datalist' }
  },

   /**Article category**/
   { path: 'manage-article-category/add', component: AddEditBlogcatComponent },
   {
     path: 'manage-article-category/list',component: ListingBlogcatComponent},
   {
     path: 'manage-article-category/edit/:_id',
     component: AddEditBlogcatComponent,
     
     resolve: { blogCatList: ResolveService },
     data: { 
       requestcondition: { 
         source: 'blog_category', 
         condition: {} 
        }, 
      endpoint: 'datalist' 
    }
   },


     /**Article management**/

     { path: 'manage-article/add', component: AddEditBlogComponent },

     {
       path: 'manage-article/list', component: ListingBlogComponent },

     {
       path: 'manage-article/edit/:_id',
       component: AddEditBlogComponent,

       resolve: { blogsList: ResolveService },
       data: { 
         requestcondition: { 
           source: 'blogs', 
           condition: {} 
        }, 
        endpoint: 'datalist' 
      }
     },


     /**Testimonial**/
     { path: 'manage-testimonial/add', component: AddEditTestimonialComponent },
     {
       path: 'manage-testimonial/list',
       component: ListingTestimonialComponent,
       resolve: { testimonialList: ResolveService },
       data: { requestcondition: { source: 'testimonial_view', condition: {} }, endpoint: 'datalist' }
     },
     {
       path: 'manage-testimonial/edit/:_id',
       component: AddEditTestimonialComponent,
       resolve: { testimonialData: ResolveService },
       data: { requestcondition: { source: 'testimonial', condition: {} }, endpoint: 'datalist' }
     },




      // ___________________Newsletter MANAGEMENT_________________
  // =======================================================

  {
    path: 'newsletter-list', component: NewsletterlistsComponent, canActivate: [AuthGuard],
    resolve: { newsData: ResolveService },
    data: {
      requestcondition: {
        source: 'newsletters_view',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },


    // _____________________newsletter________________
    { path: 'newsletter/add', component: AddEditNewsletterComponent },

    {
      path: 'newsletter/list',
      component: ListingNewsletterComponent
    },
    {
      path: 'newsletter/edit/:_id',
      component: AddEditNewsletterComponent
    },
    // -----------------------------------------------

    
  // _____________________Subscriber________________
  { path: 'subscriber/add', component: AddEditSubscriberComponent },

  {
    path: 'newsletter-list',
    component: ListingSubscriptionComponent 
  },
  {
    path: 'subscriber/add-group/edit/:_id',
    component: AddEditSubscriberComponent
  },
  // -----------------------------------------------
  // -------------------------------------------



    // _____________________Subscriber GROUP________________
    { path: 'subscriber-group/add', component: AddEditSubscriberGroupComponent },

    {
      path: 'newsletter-list',
      component: ListingSubcategoryComponent 
    },
    {
      path: 'subscriber-group/edit/:_id',
      component: AddEditSubscriberGroupComponent
    },
    // -----------------------------------------------
    // -------------------------------------------
  


  // ________________________test email _____________________
  { path: 'test/add', component: AddEditTestemailComponent },
  {
    path: 'newsletter-list',
    component: LisitngTestemailappComponent 
  
  },
  {
    path: 'test/edit/:_id',
    component: AddEditTestemailComponent
    
  
    
  },
  
    // ________________________sender's list_____________________
    { path: 'sender/add', component: AddEditSenderappComponent },
    {
      path: 'newsletter-list',
      component: ListingSenderappComponent 
    },

    {
      path: 'sender/edit/:_id',
      component: AddEditSenderappComponent
      
    
      
    },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
