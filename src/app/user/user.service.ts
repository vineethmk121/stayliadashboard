import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getAllUsers():Observable<any>{
    return this.http.get(`${environment.apiBaseURL}/users/allUsers`);
  }
  getUserDetail(id:string):Observable<any>{
    return this.http.get(`${environment.apiBaseURL}/users/viewUser/${id}`);
  }
}
