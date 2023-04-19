import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Constant } from 'src/app/services/constant.utils';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-query-view',
  templateUrl: './query-view.component.html',
  styleUrls: ['./query-view.component.css']
})
export class QueryViewComponent implements OnInit {


  responseJson = {
    pkId: 0, queryId: '', queryType: '', subject: '', query: '', answer: null, createdBy: null,
    createdByName: null, createdOn: '', updatedBy: null, updatedOn: null, status: '',
    attahments: [{ pkId: 0, extention: '', name: '', type: '' }],
    answers: []
  }
  formData: FormGroup;
  queryId

  chatList=[];
  constructor(private activatedRoute: ActivatedRoute, public router: Router, private apiHandler: ApiHandlerService, private http: HttpClient,
    private location: Location) { }

  ngOnInit() {
    console.log('in query view')
    const ref = this;
    ref.queryId = ref.activatedRoute.snapshot.params['id'];
    console.log(ref.queryId)
    ref.createForm();
    // this.activatedRoute.queryParams.subscribe(
    //   params => {
    //     console.log('Got the JWT as: ', params['jwt']);
    //     this.jwt =  params['jwt'];
    //     console.log(this.jwt)
    //   }
    // )
   
    ref.callApi();
  }

  callApi(){

    const ref = this;
    ref.apiHandler.viewQueryDetails(ref.queryId, (response: any) => {
      console.log(JSON.stringify(response));
      if(response.sts===Constant.SUCCESS_STATUS){
        ref.responseJson=response.content;
      }
      setTimeout(() => {
        ref.createForm();
      }, 500);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    })
    // ref.apiHandler.getTopAnswers(ref.queryId,(response:any)=>{
    //   console.log(JSON.stringify(response));
    //   if(response.sts===Constant.SUCCESS_STATUS){
    //     ref.chatList=response.content;
    //   }
    // },(error: HttpErrorResponse)=>{
    //   console.log(error);
    // });
    
  }
  private createForm(){
    const ref = this;
    ref.formData= new FormGroup({
      pkId: new FormControl(0,[Validators.required]),
    queryId: new FormControl(ref.queryId,[Validators.required]),
    answer: new FormControl('',[Validators.required]),
    isActive: new FormControl('Y',[Validators.required]),
    })
  }
  onBack() {
    const ref = this;
    ref.location.back();
  }

  onSubmit(){
    const ref = this;
    const tempObject= ref.formData.value;
    console.log(tempObject);
    ref.apiHandler.saveAnswer(tempObject,(response:any)=>{
      console.log(JSON.stringify(response));
      if(response.sts===Constant.SUCCESS_STATUS){
        ref.callApi();
        ref.createForm()
      }
    },(error: HttpErrorResponse)=>{
      console.log(error);
    })
  }

}
