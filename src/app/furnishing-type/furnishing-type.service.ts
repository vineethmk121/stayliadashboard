import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FurnishingTypeService {

  constructor(private http:HttpClient) { }
  furnishingType(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/furnish/allFurnishTypes`);
  }
  createfurnishing(furnishing:FormData): Observable<any> {
    return this.http.post(`${environment.apiBaseURL}admin/furnish/addFurnishType`,furnishing);
  }
  deletefurnishing(id:string): Observable<any> {
    return this.http.delete(`${environment.apiBaseURL}admin/furnish/deleteFurnishType/${id}`);
  }
  updateFurnishing(id:string, data:any):Observable<any>{
    return this.http.put(`${environment.apiBaseURL}admin/furnish/updateFurnishType/${id}`,data)
  }
}
