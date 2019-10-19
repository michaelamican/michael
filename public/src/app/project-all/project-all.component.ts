import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-all',
  templateUrl: './project-all.component.html',
  styleUrls: ['./project-all.component.css']
})
export class ProjectAllComponent implements OnInit {

  projects = [];
  currentUser: any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    // this.getSession();
    // this.getProjects();
  }

  getProjects() {
    const tempObservable = this._httpService.getProjects();
    tempObservable.subscribe((data: any) => {
      this.projects = data;
    });
  }

  getSession() {
    const tempObservable = this._httpService.getSession();
    tempObservable.subscribe((data: any) => {
      if (data.id == undefined) {
        this._router.navigate(['/palaver/projects/']);
      }
    });
  }

}
