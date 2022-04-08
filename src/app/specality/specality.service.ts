import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpecalityService {

  constructor(private http:HttpClient) { }
  getAllSpecialities(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/specialities/allspecialities`);
  }
  createSpecialities(amenties:FormData):Observable<any>{
    return this.http.post(`${environment.apiBaseURL}admin/specialities/addSpecialities`,amenties)
  }
  deleteSpecialities(id:string):Observable<any>{
    return this.http.delete(`${environment.apiBaseURL}admin/specialities/deleteSpecialities/${id}`)
  }
  updateSpec(id:string, data:any):Observable<any>{
    return this.http.post(`${environment.apiBaseURL}admin/Specialities/updateSpecialities/${id}`,data)
  }
}
