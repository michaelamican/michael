import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amican Design';
  admin: any;

  constructor(private _httpService: HttpService, private _router: Router){}

  ngOnInit(){
    console.log("App component ts hit");
  }

  logout(){
    var tempObservable = this._httpService.getUser();
    tempObservable.subscribe((data: any)=>{
      this._httpService.logoutAdmin().subscribe((data: any)=>{
        console.log(data);
      })
    })
    this._router.navigate(['/']);
  }
}
