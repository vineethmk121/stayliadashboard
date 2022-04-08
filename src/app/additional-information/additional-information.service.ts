import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdditionalInformationService {

  constructor(private http:HttpClient) { }
  getInfo(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/additionalInfo/allAddInfo`);
  }
  addPropertyType(info:FormData): Observable<any> {
    return this.http.post(`${environment.apiBaseURL}admin/additionalInfo/addInfo`,info);
  }
  deleteadInfo(id:string): Observable<any> {
    return this.http.delete(`${environment.apiBaseURL}admin/additionalInfo/deleteAddInfo/${id}`);
  }
  updateAddInfo(id:string, data:any):Observable<any>{
    return this.http.put(`${environment.apiBaseURL}admin/additionalInfo/updateAddInfo/${id}`,data)
  }
}
