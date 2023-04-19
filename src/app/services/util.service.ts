import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler,
  HttpHeaders, HttpInterceptor, HttpParams, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, finalize, map } from 'rxjs/operators';
const TOKEN_HEADER_KEY = 'Authorization';
declare const $;
@Injectable({
  providedIn: 'root'
})
export class UtilService  implements HttpInterceptor{
  navigationStack = [];
  token
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json;',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'Authorization, Lang, XMLHttpRequest',


    })
  };

  httpOptionsFile = {
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  };
 headers=new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json;',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  'Access-Control-Allow-Headers': 'Authorization, Lang, XMLHttpRequest',


})
service_count = 0; 
  
intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    let authReq = req;
    const token = JSON.parse(window.localStorage.getItem("loginToken"));
    this.service_count++; 
    console.log('token::' + token);
    if (token != null) {
      // for Spring Boot back-end
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq)
    .pipe(
      finalize(() => {
          this.service_count--;
          console.log('this.service_count::::'+this.service_count);
          if (this.service_count === 0) {
            setTimeout(() => {
              $('#loaderdiv').modal('hide');
            }, 1000);
            
          }
      })
      );
  }
  constructor(private http: HttpClient,private router: Router) { }

  callGetApi(url: any, onSuccess: any, onError: any){
    $('#loaderdiv').modal('show');
    console.log(url);
    this.http.get(url, this.httpOptions).subscribe(response => {
     
      if(response['sts']==='UN-AUTHERIZED'){
        console.log('UN-AUTHERIZED');
        window.localStorage.clear();
        setTimeout(()=>{
          this.router.navigate([""]);
        },300);

    }
      // window.setTimeout(function(){
      //   $('#loaderdiv').modal('hide');
      // }, 1000);
      // console.log("Response: "+JSON.stringify(response));
      onSuccess(response);
      
    
    }, error => {
      // window.setTimeout(function(){
      //   $('#loaderdiv').modal('hide');
      // }, 1000);
      // console.log('error:::/n'+error);
      onError(error);
      console.log('error:::');
      console.log(error );

    });
  }

  callPostAPI(url:  any, submitObj: any, onSuccess: any, onError: any){
    console.log(url);
    $('#loaderdiv').modal('show');
    // console.log(JSON.stringify(submitObj));
   this.http.post(url, JSON.stringify(submitObj), this.httpOptions)
    .subscribe(response => {
      if(response['sts']==='UN-AUTHERIZED'){
        console.log('UN-AUTHERIZED');
        window.localStorage.clear();
        setTimeout(()=>{
          this.router.navigate([""]);
        },300);

    }
      // window.setTimeout(function(){
      //   $("#loaderdiv").modal("hide");
      // }, 1000);
      onSuccess(response);
     
    }, error => {
      // window.setTimeout(function(){
      //   $("#loaderdiv").modal("hide");
      // }, 1000);
      onError(error);
      console.log('error:::');
      console.log(error );

    });
  }

  callGetParamsAPI(url: any, params:HttpParams, onSuccess: any, onError: any) {
    $('#loaderdiv').modal('show');
    this.http.get(url, {headers:this.headers,params:params})
      .subscribe(response => {
        // window.setTimeout(function () {
        //   $('#loaderdiv').modal('hide');
        // }, 1000);
        onSuccess(response);
        if(response['sts']==='UN-AUTHERIZED'){
          window.localStorage.clear();
          setTimeout(()=>{
            this.router.navigate([""]);
          },300);
  
      }
       
      }, error => {
        // window.setTimeout(function () {
        //   $('#loaderdiv').modal('hide');
        // }, 1000);
        onError(error);
        console.log('error:::');
        console.log(error );
      });
  }

  // callGetFileAPI(url:any): Observable<any>{
    //  return this.http.get(url, { responseType: 'blob', observe: 'response'}).pipe(
    //   map((res: any) => {
    //     return new Blob([res.body], { type: 'application/pdf' });
    //   })
    // );
  //   return this.http.get<any>(url)
  // }
//   callGetExcelFileAPI(url:any): Observable<any>{
//     return this.http.get(url, { responseType: 'blob', observe: 'response'}).pipe(
//      map((res: any) => {
//        return new Blob([res.body], { type: 'application/vnd.ms-excel' });
//      })
//    );
//  }



  navigateTo(location: any, navCtrl: any){
    if(this.navigationStack.indexOf(location) > -1){
      var tempArr = [];
      for(var i = 0; i < this.navigationStack.length; i++){
          if(this.navigationStack[i] === location)
          break;
          tempArr.push(this.navigationStack[i]);
      }
      this.navigationStack = new Array();
      this.navigationStack = tempArr;
    }
    this.navigationStack.push(location);
    navCtrl.navigateByUrl(location);
  }

  navigateBack(navCtrl: any){
    this.navigationStack.pop();
    navCtrl.navigateByUrl(this.navigationStack[this.navigationStack.length-1]);
  }

  trim(x: string) {
    return x ? x.replace(/^\s+|\s+$/gm, '') : '';
  }

  validateEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateMobile(mobile: any) {
    var re = /^[0-9]{10}$/;
    return re.test(String(mobile).toLowerCase());
  }

  validateOnlyCharacters(input: any) {
    var re = /^[a-zA-Z]{1,50}$/;
    return re.test(String(input).toLowerCase());
  }

  checkForUndefined(inputStr: any){
    if(inputStr == undefined || inputStr == "undefined" || inputStr == null
    || inputStr == "null" || inputStr == "NULL"){
      return "";
    }else{
      return inputStr;
    }
  }

  getDifferenceBetweenLatLong(currentLat: any, currentLong: any, targetLat: any, targetLong: any){
    var ref = this;
    var radiusOfEarth = 6371; // Radius of the earth in km
    var diffLat = ref.deg2rad(targetLat - currentLat);
    var diffLong = ref.deg2rad(targetLong - currentLong);
    var approxDiff =
    Math.sin(diffLat/2) * Math.sin(diffLat/2) +
    Math.cos(ref.deg2rad(currentLat)) * Math.cos(ref.deg2rad(targetLat)) *
    Math.sin(diffLong/2) * Math.sin(diffLong/2);
    var calculativeDiff = 2 * Math.atan2(Math.sqrt(approxDiff), Math.sqrt(1-approxDiff));
    var distance = radiusOfEarth * calculativeDiff; // Distance in km
    return distance.toFixed(2);
  }

  deg2rad(deg: any){
    return deg * (Math.PI/180);
  }

  getDateFromDateTimeStr(inputStr){
    if(inputStr != ""){
      var tempDate = inputStr.split(" ");
      return this.convertToSqlDate(tempDate[0]);
    }else{
      return inputStr;
    }
  }

  convertToSqlDate(inputStr) {
    if (inputStr != "") {
      var tempDate = inputStr.split("-");
      return tempDate[2] + "-" + tempDate[1] + "-" + tempDate[0];
    } else {
      return inputStr;
    }
  }

  getWeekendDaysCount(dString1, dString2) {
    var count = 0;
    var oneDay = 24*60*60*1000;
    for (var d, i = dString1, n = dString2; i <= n; i += oneDay) {
      d = new Date(i).getDay();
      if (d === 6 || d === 0) {
        count++;
      }
    }
    return count;
  }

  getWeekNoOfMonth(date) {
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return Math.ceil((date.getDate() + firstDay) / 7);
  }

  convertAPIDatetoAppDate(inputStr) {
    if (inputStr != "") {
      var monthArr = ["Start", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      var tempDate = inputStr.split("-");
      return tempDate[2] + "-" + monthArr[parseInt(tempDate[1])] + "-" + tempDate[0];
    } else {
      return inputStr;
    }
  }

  getMonthIndex(inputStr){
    var monthArr = ["Start", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthArr.indexOf(inputStr);
  }

  getMonthName(index){
    var monthArr = ["Start", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthArr[index];
  }

  convertToAppDate(inputStr) {
    if (inputStr != "" && inputStr != undefined) {
      var tempDate = inputStr.split("-");
      var fullDate = ((parseInt(tempDate[0]) < 10) ? "0" + parseInt(tempDate[0]) : tempDate[0]) + "-" +
       ((parseInt(tempDate[1]) < 10) ? "0" + parseInt(tempDate[1]) : tempDate[1]) + "-" + tempDate[2];
      return fullDate;
    } else {
      return inputStr;
    }
  }

  getCurrentDateTime() {
    var dateObj = new Date();
    return dateObj.getTime();
    //return dateObj.getFullYear()+"-"+dateObj.getMonth()+1+"-"+dateObj.getDate()+" "+dateObj.getHours()+":"+dateObj.getMinutes()+":"+dateObj.getSeconds()+"."+dateObj.getMilliseconds();
  }

  getDateTime(dateObj){
    var tempDateObj = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate())
    return tempDateObj.getTime();
  }

  getDateTimeFromTimeObj(dateObj, timeObj){
    var tempDateObj = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), timeObj.getHours(), timeObj.getMinutes());
    return tempDateObj.getTime();
  }

  //accepts format: YYYY-MM-DD
  getDateTimeFromDateStr(dateStr){
    var dateArr = dateStr.split("-")
    var tempDateObj = new Date(parseInt(dateArr[0]), parseInt(dateArr[1])-1, parseInt(dateArr[2]))
    return tempDateObj.getTime();
  }

  //accepts format: YYYY-MM-DD HH:MM
  getDateTimeFromDateTimeStr(dateStr, timeStr){
    var dateArr = dateStr.split("-");
    var timeArr = timeStr.split(":");
    var tempDateObj = new Date(parseInt(dateArr[0]), parseInt(dateArr[1])-1, parseInt(dateArr[2]), parseInt(timeArr[0]), parseInt(timeArr[1]));
    return tempDateObj.getTime();
  }

  getCurrentTime() {
    var dateObj = new Date();
    var hour = dateObj.getHours();
    var minute = dateObj.getMinutes();
    var second = dateObj.getSeconds();
    var timeZone = ((hour >= 12) ? "PM" : "AM");
    hour = ((hour > 12) ? (hour - 12) : hour);
    var fullTime = ((hour < 10) ? "0" + hour : hour) + ":" + ((minute < 10) ? "0" + minute : minute) + ":" + ((second < 10) ? "0" + second : second) + " " + timeZone;
    return fullTime;
  }

  getCurrentDate() {
    var dateObj = new Date();
    var day = dateObj.getDate();
    var month = dateObj.getMonth() + 1;
    var year = dateObj.getFullYear();
    var fullDate = ((day < 10) ? "0" + day : day) + "-" + ((month < 10) ? "0" + month : month) + "-" + year;
    return fullDate;
  }

  capitalizeFirstCharacter(inputString){
    return inputString.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  getCurrentDateFromObj(dateObj) {
    if(dateObj == undefined || dateObj == "undefined" || dateObj == null
    || dateObj == "null" || dateObj == "NULL" || dateObj == ""){
      return "";
    }else{
      var day = dateObj.getDate();
      var month = dateObj.getMonth() + 1;
      var year = dateObj.getFullYear();
      var fullDate = ((day < 10) ? "0" + day : day) + "-" + ((month < 10) ? "0" + month : month) + "-" + year;
      return fullDate;
    }
  }

  //accepts format: new Date().getTime()
  getDateRangeArr(dString1, dString2){
    var dateRangeArr = [];
    var oneDay = 24*60*60*1000;
    for (var i = dString1, n = dString2; i <= n; i += oneDay) {
      dateRangeArr.push(this.getCurrentDateFromObj(new Date(i)));
    }
    return dateRangeArr;
  }

  getDuration(date, time1, time2){
    if(date !="" && time1 !="" && time2 !=""){
      var tempDateArr = date.split("-");
      var tempTime1Arr = time1.split(":");
      var tempTime2Arr = time2.split(":");
      var time1Obj = new Date(parseInt(tempDateArr[2]), parseInt(tempDateArr[1])-1,parseInt(tempDateArr[0])
            ,parseInt(tempTime1Arr[0]), parseInt(tempTime1Arr[1]), parseInt(tempTime1Arr[2])).getTime();
      var time2Obj = new Date(parseInt(tempDateArr[2]), parseInt(tempDateArr[1])-1, parseInt(tempDateArr[0])
            ,parseInt(tempTime2Arr[0]),parseInt(tempTime2Arr[1]), parseInt(tempTime2Arr[2])).getTime();
      var diff = (time2Obj - time1Obj)/60000;
      var minutes = diff % 60;
      var hours = (diff / 60) % 24;
      return Math.floor(hours)+"hrs "+Math.floor(minutes)+"min";
    }else{
      return "";
    }
  }

  callPostFileAPI(url: any, submitObj: FormData, onSuccess: any, onError: any) {
  $('#loaderdiv').modal('show');
    this.http.post(url, submitObj, this.httpOptionsFile)
      .subscribe(response => {
        if(response['sts']==='UN-AUTHERIZED'){
          console.log('UN-AUTHERIZED');
          window.localStorage.clear();
          setTimeout(()=>{
            this.router.navigate([""]);
          },300);
  
      }
        window.setTimeout(function () {
        }, 1000);
        onSuccess(response);
      
      }, error => {
        window.setTimeout(function () {
        }, 1000);
        onError(error);
        console.log(error);
      });
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: UtilService, multi: true }
];
function retry(arg0: number): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error('Function not implemented.');
}

function throwError(errorMessage: string) {
  throw new Error('Function not implemented.');
}


// function finalize(arg0: () => void): import("rxjs").OperatorFunction<HttpEvent<any>, unknown> {
//   throw new Error('Function not implemented.');
// }
// function finalize(arg0: () => void): import("rxjs").OperatorFunction<import("@angular/common/http").HttpEvent<any>, unknown> {

//   throw new Error('Function not implemented.');
// }

