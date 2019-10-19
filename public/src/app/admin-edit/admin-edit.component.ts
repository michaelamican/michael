import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  title = 'Edit Admin';
  admin = {_id: '', first_name: '', last_name: '', email: '', phone: '', password: '', pwconf: ''};
  admins = [];
  currentUser: any;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getSession();
    this.refreshAdmin();
  }

  getSession() {
    const tempObservable = this._httpService.getSession();
    tempObservable.subscribe((data: any) => {
      if (data.err = 'Please login to continue') {
        this._router.navigate(['/']);
      } else {
        this.currentUser = data;
      }
    });
  }

  refreshAdmin() {
    this._route.params.subscribe((data) => {
      const id = data.id;
      const tempObservable = this._httpService.getUser(id);
      tempObservable.subscribe((data: any) => {
        this.admin = data;
      });
    });
  }

  editUser() {
    const tempObservable = this._httpService.adminUpdate(this.admin._id, this.admin);
    tempObservable.subscribe((data: any) => {
      this.admin = data;
    });
    this.ngOnInit();
  }

  reset() {
    this.ngOnInit();
  }

}
