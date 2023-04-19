import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // valid = true;
  // vendorContactDetails: boolean = true;
  // cinDetails: boolean = false;
  // controlData: boolean = false;
  // attachments: boolean = false;
  // perviewForm: boolean = false;
 

  // constructor(public router: Router) { }

  // onclickVendorContactDetails() {
  //   var ref = this;
  //   ref.vendorContactDetails = true;
  //   ref.cinDetails = false;
  //   ref.controlData = false;
  //   ref.attachments = false;
  //   ref.perviewForm = false;
    
  // }
  // onclickCinDetails()
  // {
  //   var ref=this;
  //   ref.vendorContactDetails = false;
  //   ref.cinDetails = true;
  //   ref.controlData = false;
  //   ref.attachments = false;
  //   ref.perviewForm = false;
   
  // }

  // onclickControlData() {
  //   var ref = this;
  //   ref.vendorContactDetails = false;
  //   ref.cinDetails = false;
  //   ref.controlData = true;
  //   ref.attachments = false;
  //   ref.perviewForm = false;
   
  // }

  // onclickAttachments() {
  //   var ref = this;
  //   ref.vendorContactDetails = false;
  //   ref.cinDetails = false;
  //   ref.controlData = false;
  //   ref.attachments = true;
  //   ref.perviewForm = false;
   
  // }

  // onclickPerviewForm() {
  //   var ref = this;
  //   ref.vendorContactDetails = false;
  //   ref.cinDetails = false;
  //   ref.controlData = false;
  //   ref.attachments = false;
  //   ref.perviewForm = true;
   
  // }

  // ngOnInit() {
  // }

  // submitVendorContactDetails(submitObject) {
  //   var ref = this;
  //   ref.valid = submitObject.valid;
  //   if (ref.valid) {
  //     ref.onclickCinDetails();
  //   }
  // }
  // submitCINDetails(submitObject) {
  //   var ref = this;
  //   ref.valid = submitObject.valid;
  //   if (ref.valid) {
  //     ref.onclickControlData();
  //   }
  // }

  // submitControlDataDetails(submitObject) {
  //   var ref = this;
  //   ref.valid = submitObject.valid;
  //   if (ref.valid) {
  //     ref.onclickAttachments();
  //   }
  // }
  // submitAttachmentDetails(attachments){
  //   var ref = this;
  //   //ref.valid = submitObject.valid;
  //   if (ref.valid) {
  //     ref.onclickPerviewForm();
  //   }

  // }
  // submitVendorDetails()
  // {
  //   var ref = this;
  //  if (ref.valid) {
  //     ref.onclickAttachments();
  //   }

  // }

}
