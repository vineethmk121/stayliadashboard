import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NationalityService {

  constructor(private http :HttpClient) { }
  getCountries(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/nationality/allNationality`);
  }
  deleteNationalities(id:string): Observable<any> {
    return this.http.delete(`${environment.apiBaseURL}admin/nationality/deleteNationality/${id}`);
  }
  createCountry(country:FormData): Observable<any> {
    return this.http.post(`${environment.apiBaseURL}admin/nationality/addNationality`,country);
  }
  updateCountry(id:string, data:any):Observable<any>{
    return this.http.put(`${environment.apiBaseURL}admin/nationality/updateNationality/${id}`,data)
  }
}
