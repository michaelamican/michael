import { Component, enableProdMode } from '@angular/core';
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

  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    enableProdMode();
  }

  logout() {
    const tempObservable = this._httpService.getSession();
    tempObservable.subscribe((data: any) => {
      this._httpService.logoutAdmin().subscribe((data: any) => {
        console.log(data);
      });
    });
    this._router.navigate(['/']);
  }
}
