import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {
  
  user={_id:''};
  admin={_id:'', first_name:'', last_name:''};
  title=[];

  constructor(private _httpService: HttpService, private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this.getSession()
    
    this.getAdmin()
  }

  getSession(){
    var tempObservable = this._httpService.getSession();
    tempObservable.subscribe((data:any)=>{
      if(data.err = "Please log in to continue"){
        this._router.navigate(['/palaver']);
      } else {
        this.user = data;
      }
    })
  }

  getAdmin(){
    this._route.params.subscribe((params)=>{
      var admin = params.id;
      var tempObservable = this._httpService.getUser(admin);
      tempObservable.subscribe((data:any)=>{
        this.admin = data;
      })
    })
  }

  delete(){
    this._route.params.subscribe((params)=>{
      var admin = params.id;
      var tempObservable = this._httpService.adminDelete(admin);
      tempObservable.subscribe((data:any)=>{
        console.log("Admin deleted, navigating", data);
        this._router.navigate(['/palaver/dash/']);
      })
    })
  }

  edit(){
    this._route.params.subscribe((params)=>{
      var admin = params.id;
      this._router.navigate(['/palaver/user/settings/'+admin])
    })
  }

  cancel(){
    this._router.navigate(['/palaver/dash/']);
  }
}
