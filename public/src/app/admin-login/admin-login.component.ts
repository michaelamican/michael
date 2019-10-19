import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  message = '';
  loginMe = {email: '', password: ''};
  makeMe = {first_name: '', last_name: '', email: '', password: '', pwconf: '', phone: ''};
  currentUser: any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    const tempObservable = this._httpService.adminRegister(this.makeMe);
    tempObservable.subscribe((data: any) => {
      console.log('got registration data', data);
      if (!data.error) {
        console.log('userId is:', data._id);
        this._router.navigate(['/palaver/dash/']);
        console.log('Should have called router navigate');
      } else {
        console.log('Error!', data.error);
        this.message = 'Validation error.';
      }
    });
  }

  loginUser() {
    console.log('admin-login.ts loginUser called');
    const tempObservable = this._httpService.adminLogin(this.loginMe);
    console.log('tempObservable sent off');
    tempObservable.subscribe((data: any) => {
      console.log('received tempObservable subscription');
      if (!data.error) {
        console.log('No error in data.');
        this._router.navigate(['/palaver/dash']);
        console.log('navigated to dash');
      } else {
        console.log('There was an error');
        this.message = 'Validation error.';
      }
    });
  }

  reset() {
    this.ngOnInit();
  }

  getSession() {
    const tempObservable = this._httpService.getSession();
    tempObservable.subscribe((data: any) => {
      if (data.err == 'Please login to continue') {
        this._router.navigate(['/']);
      } else {
        this.currentUser = data;
      }
    });
  }
}
