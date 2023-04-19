import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';



@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();

  constructor(private router: Router) {}


  isAuth() {
    return window.localStorage.getItem("loginToken") !== null;
  }


}
