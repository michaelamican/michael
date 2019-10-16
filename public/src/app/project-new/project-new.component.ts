import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  newProject = { name:'', gittslug:'', exturl:'', desc:'', com:'', img:'', rank:''};
  projects = [];
  admin:any;

  constructor(private _httpService: HttpService, private _router: Router){ }

  ngOnInit() {
    this.getAllProjects();
    this.getAdmin();
  }

  getAllProjects(){
    var tempObservable = this._httpService.getProjects();
    tempObservable.subscribe((data: any)=>{
      this.projects = data;
    })
  }

  getAdmin(){
    var tempObservable = this._httpService.getSession();
    tempObservable.subscribe((data: any)=>{
      if(data.error){
        this._router.navigate(['/palaver']);
      } else {
        this.admin = data;
      }
    })
  }
}
