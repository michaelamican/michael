import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  
  user = [];
  projects = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    console.log("Admin-Dash ts onInit");
    this.getAdmin();
    this.getProjects();
  }

  getAdmin(){
    console.log("Admin-Dash ts getAdmin");
    var tempObservable = this._httpService.getUser();
    tempObservable.subscribe((data: any)=>{
      this.user = data;
    })
  }

  getProjects(){
    console.log("Admin-Dash ts getProjects");
    var tempObservable = this._httpService.adminProjectsAll();
    tempObservable.subscribe((data: any)=>{
      this.projects = data;
    })
  }

}
