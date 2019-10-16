import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
// import { ContactFormService } from 'contact-form.service.ts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  message = {email:'', phone:'', message:'', reason:''};

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {

  }

  sendMail(){
    // this.formService.buildForm();
  }

  reset(){
    this.ngOnInit();
  }

}
