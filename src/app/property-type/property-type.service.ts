import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PropertyTypeService {

  constructor(private http:HttpClient) { }
  propertyType(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/propertyType/allPropertyTypes`);
  }
  addPropertyType(property:FormData): Observable<any> {
    return this.http.post(`${environment.apiBaseURL}admin/propertyType/addPropertyType`,property);
  }
  deletePtype(id:string): Observable<any> {
    return this.http.delete(`${environment.apiBaseURL}admin/propertyType/deletePropertyType/${id}`);
  }
  updateProType(id:string, data:any):Observable<any>{
    return this.http.put(`${environment.apiBaseURL}admin/propertyType/updatePropertyType/${id}`,data)
  }
}
