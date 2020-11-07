import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestoService {
 url="http://localhost:3000/resto"
 urltwo="http://localhost:3000/users"
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(this.url)
  }
  saveData(data){
    return this.http.post(this.url,data)
  }
  deleteData(id){
     return this.http.delete(`${this.url}/${id}`)
  }
  updateRestoData(id){
    return this.http.get(`${this.url}/${id}`)
  }
  realupdateRestoData(id, data){
    return this.http.put(`${this.url}/${id}`, data)
  }
  registerUser(data){
    return this.http.post(this.urltwo, data)
   
  }
}
