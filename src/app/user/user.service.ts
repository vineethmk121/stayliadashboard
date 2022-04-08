import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getAllUsers(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/users/allUsers`);
  }
  getUserDetail(id: string): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/users/viewUser/${id}`);
  }
  addUser(user: FormData): Observable<any> {
    return this.http.post(`${environment.apiBaseURL}admin/users/addUser`, user);
  }

  getRoles(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/role/allRoles`);
  }
  getCountry(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/country/allCountry`);
  }
  changePassword(data: any): Observable<any> {
    return this.http.post(
      `${environment.apiBaseURL}admin/users/changePassword`,
      data
    );
  }
   getuData(id:any):Observable<any>{
     return this.http.get(`${environment.apiBaseURL}admin/users/viewUser/${id}`)
   }
   deleteSUser(id:any):Observable<any>{
    return this.http.delete(`${environment.apiBaseURL}admin/users/deleteUser/${id}`)
  }
  updateUser(id:any, data:any):Observable<any>{
    return this.http.put(`${environment.apiBaseURL}admin/users/updateUser/${id}`,data)
  }
}
