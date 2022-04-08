import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PropertyCategoriesService {

  constructor(private http:HttpClient) { }
  getPropertyCat(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/propertyType/allPropertyTypes`);
  }
  addPropertyCat(property:FormData): Observable<any> {
    return this.http.post(`${environment.apiBaseURL}admin/propertyType/addPropertyType`,property);
  }
  deletePCat(id:string): Observable<any> {
    return this.http.delete(`${environment.apiBaseURL}admin/propertyType/deletePropertyType/${id}`);
  }
  updateProCat(id:string, data:any):Observable<any>{
    return this.http.put(`${environment.apiBaseURL}admin/propertyType/updatePropertyType/${id}`,data)
  }
}
