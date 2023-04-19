import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Location } from '@angular/common';
import { Constant } from 'src/app/services/constant.utils';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css']
})
export class QueryListComponent implements OnInit {

  queryList=[];
  queryTypes=[]
  formData: FormGroup;
  alertResponse = { message: '', status: '', route: '' };
  attachment: any = null;
  constructor(public router: Router, private apiHandler: ApiHandlerService, private http: HttpClient,
    private location: Location) { }

  ngOnInit() {
    const ref = this;
    ref.callApi();
    ref.createForm();
    ref.apiHandler.getQueryMaster((response:any)=>{
      console.log(JSON.stringify(response));
     
      if(response.sts===Constant.SUCCESS_STATUS){
        ref.queryTypes=response.content.queryTypes;
      }
    },(error: HttpErrorResponse)=>{
      console.log(error);
    });
  }

  callApi(){
    const ref = this;
    ref.apiHandler.getQueryList((response:any)=>{
      console.log(JSON.stringify(response));
      if(response.sts===Constant.SUCCESS_STATUS){
        ref.queryList=response.content;
        ref.initializeDatatable();
      }else{
        ref.initializeDatatable();
      }
    },(error:HttpErrorResponse)=>{
      ref.initializeDatatable();
      console.log(error);
    });
  }
  createForm(){
    const ref = this;
    ref.attachment = null;
    ref.formData=new FormGroup({
      pkId: new FormControl(0,[Validators.required]),
      queryType: new FormControl('',[Validators.required]),
      subject: new FormControl('',[Validators.required]),
      query: new FormControl('',[Validators.required]),
      answer: new FormControl('',[Validators.required]),
     attachment: new FormControl(null),
    })
  }

  onSubmit(){
    const ref = this;

    const tempobject:any=ref.formData.value;
    console.log(ref.formData.get('query').value);
    console.log('Json Response==>> ');
    console.log(tempobject)
  
    let form= new FormData();
    form.append("queryType",tempobject.queryType);
    form.append("subject",tempobject.subject);
    form.append("query",tempobject.query);
    form.append("answer",tempobject.answer);
    if(tempobject.attachment!==null){
      form.append("attachment",tempobject.attachment);
    }

    ref.apiHandler.saveQuery(form,(response:any)=>{
      console.log(JSON.stringify(response));
      setTimeout(() => {
        $('#createquery').modal('hide');
        $('#alertMsg').modal('show');
      }, 1000);
      ref.alertResponse.message=response.msg;
      ref.alertResponse.status=response.sts;
      ref.initializeDatatable();
    },(error:HttpErrorResponse)=>{
      setTimeout(() => {
        $('#alertMsg').modal('show');
      }, 1000);
      ref.alertResponse.message=Constant.ERROR_MESSAGE;
      ref.alertResponse.status=Constant.ERROR_STATUS;
      ref.alertResponse.route='';
      console.log(error);
      ref.initializeDatatable();

    });
  
  }

  onAddQuery(){
    const ref = this;
    // const container= document.getElementById('addModal');
    // const button= document.createElement('button');
    // button.type='button';
    // button.style.display='none';
    // button.setAttribute('data-toggle','modal');
    // button.setAttribute('data-target','#createquery'); 
    // container.appendChild(button);
    // button.click();
    ref.createForm();
    setTimeout(() => {
      $('#createquery').modal('show');
    }, 500);
   
  }
  upload(files: File[]) {
    const ref = this;
    ref.attachment = null;
    const file = files[0] as File;
    const fileSize = file.size / 1024;
      ref.formData.get('attachment').patchValue(null);
      if (fileSize < 5050) {
        ref.attachment = files[0];
        ref.formData.get('attachment').patchValue(ref.attachment);
      }
      else {
        alert('The attachment size should be less than 5MB');
      }
 
   
 
  }

  okAlert(){
    const ref = this;
    $('#alertMsg').modal('hide');
    ref.createForm();
    ref.callApi();
  }

  initializeDatatable() {
    $('#querylist12').dataTable().fnDestroy();
    setTimeout(() => {
      $('#querylist12').DataTable({
        "scrollY": "50vh",
        "scrollX": "100%",
        "scrollCollapse": true,
        "paging": false,
        "info": false,
        'aaSorting': [],
        "language": {
          "emptyTable": "No data available"
        }
      });
    }, 800);
  }
}
