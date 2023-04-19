import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
import { Constant } from 'src/app/services/constant.utils';
import { Location } from '@angular/common';
declare var $:any;
@Component({
  selector: 'app-lead-generation-list',
  templateUrl: './lead-generation-list.component.html',
  styleUrls: ['./lead-generation-list.component.css']
})
export class LeadGenerationListComponent implements OnInit {

  leadUserList=[];
  selectedItem=0;
  constructor(public router:Router, private apiHandler: ApiHandlerService, private http: HttpClient,
    private location: Location,public dialog: MatDialog) { }

  ngOnInit() {
    const ref=this;
    ref.callApi();
  }

  callApi(){
    const ref=this;
    ref.apiHandler.getLeadUserList((response:any)=>{
      console.log(JSON.stringify(response))
      if(response.sts===Constant.SUCCESS_STATUS){
        ref.leadUserList=response.content;
      }else{
        ref.leadUserList=[];
      }
      ref.initializeDatatable();
      
    },(error:HttpErrorResponse)=>{
      console.log(error);
      ref.leadUserList=[];
      ref.initializeDatatable();
    })

  }
  private initializeDatatable(){
    $('#leadUserList').dataTable().fnDestroy();
    setTimeout(() => {
      $('#leadUserList').DataTable({
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
