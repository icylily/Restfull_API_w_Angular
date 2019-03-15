import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http:HttpClient) { }
  getTasks(){return this._http.get('/api/tasks');}
  getTaskById(ID:any){ return this._http.get('/api/tasks/'+ ID)}
}