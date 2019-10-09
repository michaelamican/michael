import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

//Admin Functions ---------------------------------------------------------------------------------
  getUser(){
    return this._http.get('/api/getuser/');
  }
  logoutAdmin(){
    return this._http.get('/api/logout/');
  }
  goHome(){
    return this._http.get('/api/home/');
  }
  meetMichael(){
    return this._http.get('/api/michael/');
  }
  seeProjects(){
    return this._http.get('/api/projects/');
  }
  seeProject(id){
    return this._http.get('/api/projects/' + id);
  }
  adminHome(){
    return this._http.get('/api/palaver/');
  }
  adminDash(){
    console.log("http service admin dash reached");
    return this._http.get('/api/palaver/dash/');
  }
  adminSettings(){
    return this._http.get('/api/palaver/user/settings/');
  }
  adminProfile(id){
    return this._http.get('/api/palaver/user/'+id);
  }
  adminLogin(adminObj){
    console.log("http service admin login reached");
    console.log("adminObj email is");
    console.log(adminObj.email);
    return this._http.post('/api/palaver/login/', adminObj);
  }
  adminSure(id){
    return this._http.get('/api/palaver/user/delete/'+id,);
  }
  adminDelete(id){
    return this._http.delete('/api/palaver/user/delete/'+id);
  }
  adminRegister(adminObj){
    return this._http.post('/api/palaver/register/', adminObj);
  }
  adminUpdate(adminObj){
    return this._http.put('/api/palaver/user/settings/'+adminObj.id, adminObj);
  }
  adminProjectsAll(){
    return this._http.get('/api/palaver/projects/');
  }
  adminProjectNew(){
    return this._http.get('/api/palaver/projects/new/');
  }
  adminProjectView(id){
    return this._http.get('/api/palaver/project/'+ id);
  }
  adminProjectCreate(projectObj){
    return this._http.post('/api/palaver/projects/create', projectObj);
  }
  adminProjectEdit(id){
    return this._http.get('/api/palaver/projects/edit/'+id);
  }
  adminProjectUpdate(projectObj){
    return this._http.put('/api/palaver/projects/edit/'+projectObj.id, projectObj);
  }
  adminProjectSure(id){
    return this._http.get('/api/palaver/projects/delete/'+id);
  }
  adminProjectDelete(id){
    return this._http.delete('/api/palaver/projects/delete/'+id);
  }

  

//Project functions -------------------------------------------------------------------------------
  getProjects(){
    return this._http.get('/api/palaver/projects');
  }
  findProject(id){
    return this._http.get('/api/palaver/projects/' + id);
  }
  updateProject(id, projectObj) {
    return this._http.put('/api/palaver/projects'+id, projectObj);
  }

}
