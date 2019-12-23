
import { Component, OnInit, Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, of as observableOf } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { MetaService } from '@ngx-meta/core';
import {ApiService} from "../../../api.service";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface DialogData {data: any;} 



export class FileNode{
  children: FileNode[];
  blogListing: string;
  type:any
}

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {


  public journalList: any = []; 
  public indexval:any=5;
  public journalListing:any;
  public p_id: any;
  public data:any;
  public blogcategorycount:any;
  public resc: any = [];  
  public catData: any;
  public blogCount: any =[];
  public blogtitle: any;

  public videourl:any='';
  public url:"https://www.youtube.com/embed/"

  safeSrc: SafeResourceUrl;

  


    /*------------TREE NESTEDDATA-----*/

    public nestedTreeControl: NestedTreeControl<FileNode>;
    public blogCategoryDataSource:MatTreeNestedDataSource<FileNode>;
    public dataChange:BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);
  
    /*------------TREE NESTEDDATA-----*/



  constructor( public apiService: ApiService, private readonly meta: MetaService, private activatedRoute: ActivatedRoute, public router: Router, private cookieservice: CookieService, private sanitizer: DomSanitizer,public dialog:MatDialog) { window.scrollTo(500, 0);

    this.meta.setTitle('Grace Medical - Medical Journals');
    this.meta.setTag('og:description', 'Stay updated with all the new developments taking place in the Healthcare and Medical industry with the latest Medical Journals maintained by some of the most esteemed professionals of the Medical World.');
    this.meta.setTag('twitter:description', 'Stay updated with all the new developments taking place in the Healthcare and Medical industry with the latest Medical Journals maintained by some of the most esteemed professionals of the Medical World.');
    this.meta.setTag('og:keyword', 'Medical Journals, Journals of the Healthcare Industry, Medical Industry Journals');
    this.meta.setTag('twitter:keyword', 'Medical Journals, Journals of the Healthcare Industry, Medical Industry Journals');
    this.meta.setTag('og:title', 'Grace Medical - Medical Journals');
    this.meta.setTag('twitter:title', 'Grace Medical - Medical Journals');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');

   
     /*------------Blog List-----*/
     let data: any = {
      source:"blogs_view"
    }

    this.apiService.postDatawithoutToken("datalistwithouttoken", data).subscribe((result: any)=>{
      // console.log(result.res);
      this.journalListing = result.res;
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.journalListing);
    });

    let catData: any = {
      source:"blog_category_view"
    }

    this.apiService.postDatawithoutToken("datalistwithouttoken", catData).subscribe((result: any)=> {
      // console.log(result.res);
      this.blogCategoryDataSource = result.res;
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogCategoryDataSource);
    });



    let catDataCount: any = {
      source:"blog_category_view"
    }

    this.apiService.postDatawithoutToken("datalistwithouttoken", catDataCount).subscribe((result: any)=>{
      // console.log(result.res);
      this.blogcategorycount = result.resc;
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogcategorycount);
    });


      /*------------Blog Category-----*/
     
    /*------------TREE NESTEDDATA-----*/

    this.nestedTreeControl = new NestedTreeControl<FileNode> (this._getChildren);
    this.blogCategoryDataSource = new MatTreeNestedDataSource();

    this.dataChange.subscribe(data => this.blogCategoryDataSource.data = data);

    this.dataChange.next([
      {
        blogListing: "blog.blogtitle",
        type: "",
        children:[
          {
            blogListing: "blog.blogtitle",
            type: "exe",
            children: [],
          }
        ],
      },
      {
        blogListing: "blog.blogtitle",
        type: "exe",
        children:[],
      },
    ]);

   }

   private _getChildren = (item: FileNode) => { return observableOf(item.children); };
   hasNestedChild = (_: number, nodeData: FileNode) => { return ! (nodeData.type); };

     /*------------TREE NESTEDDATA-----*/

     
     /*------------End Blog Category-----*/

  ngOnInit() {
    
   

  }

   //*********view Video modal section***********//

   openvideourl(val:any){

    let url:any;
    url="https://www.youtube.com/embed/";
     // console.log('video url....>',url+val);
     this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(url + val);
     
     // console.log('>>>>>>>>>>>>>>>>>>',this.safeSrc)
     const dialogRef = this.dialog.open(CommonVideoModalComponent, {
       panelClass:['modal-md','success-modal'],       
       width:'450px',
       data:this.safeSrc, 
     });
     dialogRef.afterClosed().subscribe(result => {  
     });
   }

//********* end Video modal section***********//


  //***********blog list view in blog detail************//
  blogdetail(val:any){
    // console.log(val)
    this.router.navigateByUrl('/journalsdetail/' +val)
  }

  showmore(index:any) {
    this.p_id = index._id;
   }

   copyText(val:any){
    console.log('copyText');
  }


  //***********load more view blog *************//
  blogloadmore(){
    // console.log('load more')
    this.indexval=this.indexval+2;

  }

  //**blog view from blog category list**//
  openblog(val:any){
    console.log(val)
  }
}



//**********video modal component************//
@Component({
  selector:'app-commonvideomodal',
  templateUrl:'./commonvideomodal.html'
})
export class CommonVideoModalComponent {
  constructor( public dialogRef: MatDialogRef<CommonVideoModalComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData){
  }
}
