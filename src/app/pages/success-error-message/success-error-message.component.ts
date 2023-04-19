import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/services/api-handler.service';
declare var $:any;
@Component({
  selector: 'app-success-error-message',
  templateUrl: './success-error-message.component.html',
  styleUrls: ['./success-error-message.component.css']
})
export class SuccessErrorMessageComponent implements OnInit {

  @Input() alertResponse={message:'',status:'',route:''};

  constructor(public router:Router, private apiHandler: ApiHandlerService, private http: HttpClient,
    ) { 
    }

  ngOnInit() {

  }

  okAlert(){
    const ref=this;
    console.log(JSON.stringify(ref.alertResponse))
    const temp:string=ref.alertResponse.route;
    $('#alertMsg').modal('hide');
    ref.router.navigate([temp]);

  }
}
