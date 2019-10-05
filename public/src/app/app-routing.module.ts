import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashComponent } from './splash/splash.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalComponent } from './personal/personal.component';
import { ProjectAllComponent } from './project-all/project-all.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminProjectsAllComponent } from './admin-projects-all/admin-projects-all.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { AdminProjectViewComponent } from './admin-project-view/admin-project-view.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDeleteComponent } from './project-delete/project-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  //Null session functions ------------------------------------------------------------------------------------------------
  {path: '', pathMatch: 'full', component: SplashComponent},
  {path: 'contact', pathMatch: 'full', component: ContactComponent},
  {path: 'michael', pathMatch:'full', component: PersonalComponent},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'projects', component: ProjectAllComponent, children: [
    {path: 'projects/:id', component: ProjectViewComponent},
    {path: '', pathMatch: 'full', redirectTo: '/projects'}
  ]},
  //Admin functions -------------------------------------------------------------------------------------------------------
  {path: 'palaver', component: AdminLoginComponent, children:[
    {path:'dash', component: AdminDashComponent},
    {path:'projects', component: AdminProjectsAllComponent, children:[
      {path:'new', component: ProjectNewComponent},
      {path:':id', component: AdminProjectViewComponent},
      {path:'edit/:id', component: ProjectEditComponent},
      {path:'delete/:id', component: ProjectDeleteComponent},
    ]},
    {path:'user/settings', component: AdminEditComponent},
    {path:'user/:id', component: AdminViewComponent},
    {path:'user/delete/:id', component: AdminDeleteComponent},
 
  ]},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
