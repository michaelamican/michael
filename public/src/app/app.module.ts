import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProjectViewComponent } from './admin-project-view/admin-project-view.component';
import { AdminProjectsAllComponent } from './admin-projects-all/admin-projects-all.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { ProjectAllComponent } from './project-all/project-all.component';
import { ProjectDeleteComponent } from './project-delete/project-delete.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { SplashComponent } from './splash/splash.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashComponent,
    AdminDeleteComponent,
    AdminEditComponent,
    AdminLoginComponent,
    AdminProjectViewComponent,
    AdminProjectsAllComponent,
    AdminViewComponent,
    ContactComponent,
    HomeComponent,
    PersonalComponent,
    ProjectAllComponent,
    ProjectDeleteComponent,
    ProjectEditComponent,
    ProjectNewComponent,
    ProjectViewComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
