import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  title = 'Edit Project';
  project = {_id: '', name: '', gitslug: '', exturl: '', desc: '', com: '', img: '', rank: ''};
  projects = [];
  admin = [];

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    this._route.params.subscribe((data) => {
      const id = data.id;
      const tempObservable = this._httpService.findProject(id);
      tempObservable.subscribe((newData: any) => {
        this.project = newData;
      });
    });
  }

  updateProject() {
    this._route.params.subscribe((data) => {
      const id = data.id;
      const tempObservable = this._httpService.updateProject(this.project._id, this.project);
      tempObservable.subscribe((data: any) => {
        this._router.navigate(['/palaver/projects/' + id]);
      });
    });
  }

  reset() {
    this.ngOnInit();
  }

}
