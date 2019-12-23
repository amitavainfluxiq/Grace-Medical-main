import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../api.service';

import { MetaService } from '@ngx-meta/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { NestedTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, observable, of as observableOf } from 'rxjs';
import { MatTreeNestedDataSource } from '@angular/material/tree';


export interface DialogData {
  data: any;  
} 

export class FileNode{
  children: FileNode[];
  filename: string;
  type:any;
}


@Component({
  selector: 'app-journals-detail',
  templateUrl: './journals-detail.component.html',
  styleUrls: ['./journals-detail.component.css']
})
export class JournalsDetailComponent implements OnInit {


  public nestedTreeControl: NestedTreeControl<FileNode>;
  public blogCategoryDataSource:MatTreeNestedDataSource<FileNode>;
  public dataChange:BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);


  public blogDetail:any;
  public journal:any = '';
  public blogList:any;
  public journal_img:any;
  public journal_image:any;

  public blogcategorysearch:any;
  public blogcategory:any;
  public blogcategorycount:any;
  public blogcat: any;
  public blogCount: any;
  public journal1:any ='';  
  public journalListing:any;
  public mostviewjournalListing:any;
  public youMightLikejournalListing:any;
  public indexval:any=3;
  public indexval1:any=3;


  safeSrc: SafeResourceUrl;

  copyText(val:any){
    console.log('copyText');
  }
  
  constructor(private readonly meta: MetaService, private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService,private sanitizer: DomSanitizer,public dialog:MatDialog) { window.scrollTo(500, 0);

    this.meta.setTitle('Grace Medical - Medical Journals Detail');
    this.meta.setTag('og:description', 'Stay updated with all the new developments taking place in the Healthcare and Medical industry with the latest Medical Journals maintained by some of the most esteemed professionals of the Medical World.');
    this.meta.setTag('twitter:description', 'Stay updated with all the new developments taking place in the Healthcare and Medical industry with the latest Medical Journals maintained by some of the most esteemed professionals of the Medical World.');
    this.meta.setTag('og:keyword', 'Medical Journals, Journals of the Healthcare Industry, Medical Industry Journals');
    this.meta.setTag('twitter:keyword', 'Medical Journals, Journals of the Healthcare Industry, Medical Industry Journals');
    this.meta.setTag('og:title', 'Grace Medical - Medical Journals Detail');
    this.meta.setTag('twitter:title', 'Grace Medical - Medical Journals Detail');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo2.png');
    this.meta.setTag('twitter:image', '../../assets/images/logo2.png');


      /*------------Most Viewed Blogs List-----*/
    let mostViewData: any = {
      source:"blogs_view",
      condition: { }
    }

    this.apiService.postDatawithoutToken("datalistwithouttoken", mostViewData).subscribe((result: any)=>{
      //console.log(result.res);
      this.mostviewjournalListing = result.res;
      //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.mostviewjournalListing);
    });

    /*------------End Most Viewed Blogs List-----*/


    
      /*------------Most Viewed Blogs List-----*/
      let youMightLikeData: any = {
        source:"blogs_view",
        condition: { }
      }
  
      this.apiService.postDatawithoutToken("datalistwithouttoken", youMightLikeData).subscribe((result: any)=>{
        //console.log(result.res);
        this.youMightLikejournalListing = result.res;
        //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.youMightLikejournalListing);
      });
  
      /*------------End Most Viewed Blogs List-----*/
  


    
    this.nestedTreeControl = new NestedTreeControl<FileNode> (this._getChildren);
    this.blogCategoryDataSource = new MatTreeNestedDataSource();

    this.dataChange.subscribe(data => this.blogCategoryDataSource.data = data);


    this.dataChange.next([
      {
        filename: "test",
        type: "",
        children:[
          {
            filename: "test3",
            type: "exe",
            children: [],
          }
        ],
      },
      {
        filename: "test2",
        type: "exe",
        children:[],
      },
    ]);

  }

  private _getChildren = (item: FileNode) => { return observableOf(item.children); };
  hasNestedChild = (_: number, nodeData: FileNode) => { return ! (nodeData.type); };

  panelOpenState = false;






  ngOnInit() {


    let data: any = {
      source:"blog_category_view"
    }

    this.apiService.postDatawithoutToken("datalistwithouttoken", data).subscribe((result: any)=>{
      // console.log(result.res);
      this.blogCategoryDataSource = result.res;
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogCategoryDataSource);
    });


    
    let catData: any = {
      source:"blog_category_view"
    }

    this.apiService.postDatawithoutToken("datalistwithouttoken", catData).subscribe((result: any)=>{
      // console.log(result.res);
      this.blogcategorycount = result.resc;
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogcategorycount);
    });



    
    let blogsdatacount: any = {
      source:"blogs_view"
    }

    this.apiService.postDatawithoutToken("datalistwithouttoken", blogsdatacount).subscribe((result: any)=>{
      // console.log(result.res);
      this.blogCount = result.resc;
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.blogCount);
    });

  /*------------End Most Viewed Blogs List-----*/


  // ************* blog details *****************//
      
  this.activatedRoute.data.forEach((data: any) => {
    this.journal = data.journalCatList.res;
    // console.log('>>>>>>>kb>>>>>>>',this.journal)  
    // this.journal_img=this.journal.image;
    // console.log('>>>>>>>kb>>>>>>>',this.journal_img)
  })


  }


  openvideourl(val: any){
    //console.log(val)
    let url:any;
     url="https://www.youtube.com/embed/";
      //console.log('video url....>',url+val);
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(url + val);
      
      //console.log('>>>>>>>>>>>>>>>>>>',this.safeSrc)
      const dialogRef = this.dialog.open(VideoModalComponent, {
        // panelClass:['modal-md','success-modal'],
       
        width:'450px',
        data:this.safeSrc,
      
        
  
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
      });

  }


   //***********you might like list view in blog detail************//
   youMightLikeDetail(val:any){
    // console.log(val)
    this.router.navigateByUrl('/journalsdetail/' +val)
  }

    //***********you might like list view in blog detail************//
    mostViewDetail(val:any){
      // console.log(val)
      this.router.navigateByUrl('/journalsdetail/' +val)
    }


  //***********load more view blog *************//
  journalMostViewLoadMore(){
    // console.log('load more')
    this.indexval1=this.indexval1+3;

  }


  journalYouMightLikeLoadMore(){
    // console.log('load more')
    this.indexval=this.indexval+3;

  }


  


}


@Component({
  selector:'app-videomodal',
  templateUrl:'./videomodal.html'
})
export class VideoModalComponent {
  constructor( public dialogRef: MatDialogRef<VideoModalComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData){
  }
}