import { ElementRef, EventEmitter, Injectable, Input, ViewChild } from '@angular/core';
import { switchMap, map, takeWhile } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// for setting observables to get serverurl and endpointurl from app
import { Observable, Subject, Subscription } from 'rxjs';
import{CookieService} from 'ngx-cookie-service';
import {environment } from '../environments/environment';


@Injectable({   
  providedIn: 'root'
})
export class ApiService {

  public serverUrl =  environment["API_URL"];
  public nodesslurl =  environment["nodesslurl"];
  public uploadurl =  environment["uploadurl"];
  public base64encode =  environment["base64encode"];
  public uploadsslurl: any= environment["download_url"];

  public fileimgsslurl: any;



  public lengthis;
  public percentageis;
  public inprogress;
  public progress: any = [];
  public uploadtype;
  public uploaderror: any = '';
  public accesstoken:any = this.cookieService.get('jwtToken');
  fileservername: any = [];
  addendpointUrl: any;
  uploadEndpointUrl:any; //souresh
  updateendpointUrl: any;
  deletesingle_endpointUrl: any;
  updatestatus_single_endpointUrl: any;
  deletemultiple_endpointUrl: any;
  updatestatus_multiple_endpointUrl: any;
  getdata_endpointUrl: any;
 
  public subscriptionServer: Subscription;
  public subscriptionaddEndpoint: Subscription;
  public subscriptionuploadEndpoint: Subscription;   //added by souresh
  public subscriptionupdateEndpoint: Subscription;
  public subscriptiondeletesingleEndpoint: Subscription;
  public subscriptionupdatestatusSingleEndpoint: Subscription;
  public subscriptionGetdataEndpoint: Subscription;
  public tokenVal: any;
  constructor(private _http: HttpClient, private cookieService :CookieService) {

      this.fileimgsslurl = 'http://api.nexgentesting.com/';    
  }

  



  isTokenExpired() {

    // const helper = new JwtHelperService();
    // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
    // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
    // console.log('refresh_token',localStorage.getItem('refresh_token'))
    // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
    // console.log('id_token isExpired:',isIdTokenExpired)
    // console.log('refresh_token isExpired:',isRefreshTokenExpired)
  }

  addData(requestdata: any) {
    console.log('in adddata apiservice');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accesstoken          //hard code written access-token(temp)
      })
    };

    //console.log('httpoptions',httpOptions,this.serverUrl,requestdata);
    var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }
  
  /*******added by souresh************/
  uploadFile(requestdata:any){
    const httpOptions={
        headers: new HttpHeaders({
          'Content-Type':'application/json',
          'access-token':this.accesstoken          //hard code written access-token(temp)
        })
    };
    var result=this._http.post(this.serverUrl + this.uploadEndpointUrl,JSON.stringify(requestdata),httpOptions).pipe(map(res=>res));
    return result;
  }
  /*******souresh end here********/
  UpdateData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.accesstoken          //hard code written access-token(temp)
      })
    };
    var result = this._http.post(this.serverUrl + this.updateendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  getData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + this.getdata_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;

  }
/*************** Added by himadri start here ***************/ 


getDataForDatalist(endpoint: any) {

  const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': this.accesstoken
      })
  };

  // this.isTokenExpired()
  var result = this._http.post(this.serverUrl + 'datalist', endpoint, httpOptions).pipe(map(res => res));

  return result;
}
// getData end
/*************** Added by himadri using for datalist start here ***************/ 

getDatalist(requestdata: any) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    })
  };
  var result = this._http.post(this.serverUrl + requestdata.endpoint, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
  return result;


}
getDatalistWithToken(requestdata: any, newdata: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': newdata.token
      })
    };
    var result = this._http.post(this.serverUrl + requestdata.endpoint, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
}

getTempToken() {
  var result = this._http.get(this.serverUrl + 'gettemptoken').pipe(map(res => res));
  return result;
}
/*************** Added by himadri end here ***************/ 

getDatalistForResolve(requestdata: any) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    })
  };
  // console.log(requestdata)
  
  var result = this._http.post(this.serverUrl + requestdata.endpoint, JSON.stringify(requestdata.requestcondition), httpOptions).pipe(map(res => res));
  return result;


}




  addLogin(requestdata: any) {
    console.log('in addLogin apiservice');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // 'Authorization': this.accesstoken          //hard code written access-token(temp)
      })
    };

    console.log(this.serverUrl,requestdata);
    var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }
  /*************** Added by himadri end here ***************/ 

/*************** Added by himadri start here ***************/ 
forgetPassword(requestdata: any) {
  console.log('in forgetPassword apiservice');
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Authorization': this.accesstoken          //hard code written access-token(temp)
    })
  };

  console.log(this.serverUrl,requestdata);
  var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
  return result;
}
/*************** Added by himadri end here ***************/ 


  deleteSingleData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  deleteMultipleData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl+'many', JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  UpdateStatusForSingleData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  UpdateStatusForMultipleData(requestdata: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl+'many', JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }
  CustomRequest(requestdata: any, endpoint:any ) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accesstoken
      })
    };
    var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
    return result;
  }

  gettemptoken(){
    var result = this._http.get(this.serverUrl + 'gettemptoken').pipe(map(res=>res));
    return result;
  }


  getJsonObject(path:any){
    var result = this._http.get(path).pipe(map(res => res));
    return result;
}

/**add postData */
postdata(requestdata: any) {
  console.log('post Data');
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Authorization': this.accesstoken          //hard code written access-token(temp)
    })
  };

  console.log(this.serverUrl,requestdata);
  var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(map(res => res));
  return result;
}



/** call api via post method */
httpViaPost(endpoint, jsonData): Observable<any> {
  /*set common header */
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.cookieService.get('jwtToken')
    })
  };

  return this._http.post(this.serverUrl + endpoint, jsonData,httpOptions);
}








}





















