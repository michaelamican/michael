import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent implements OnInit {
  project = {name: '', _id: ''};


  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    // this.getSession();
    this.getProject();
  }
  getSession() {

  }

  getProject() {
    this._route.params.subscribe((data: any) => {
      const id = data.id;
      const tempObservable = this._httpService.findProject(id);
      tempObservable.subscribe((newData: any) => {
        this.project = newData;
      });
    });
  }

  delete() {

  }

  edit() {

  }

  cancel() {

  }
}
