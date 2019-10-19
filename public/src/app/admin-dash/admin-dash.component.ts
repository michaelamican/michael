import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {

  user: any;
  projects = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getAdmin();
    this.getProjects();
  }

  getAdmin() {
    const tempObservable = this._httpService.getSession();
    tempObservable.subscribe((data: any) => {
      const chonkObservable = this._httpService.getUser(data.id);
      chonkObservable.subscribe((newData: any) => {
        this.user = newData;
      });
    });
  }

  getProjects() {
    console.log('Admin-Dash ts getProjects');
    const tempObservable = this._httpService.adminProjectsAll();
    tempObservable.subscribe((data: any) => {
      this.projects = data;
    });
  }

}
