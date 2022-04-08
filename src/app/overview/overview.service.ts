import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private http:HttpClient) { }
  getAllOverview(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/overView/allOverViews`);
  }
  createOverview(amenties:FormData):Observable<any>{
    return this.http.post(`${environment.apiBaseURL}admin/overView/addOverView`,amenties)
  }
  deleteOverview(id:string):Observable<any>{
    return this.http.delete(`${environment.apiBaseURL}admin/overView/deleteOverView/${id}`)
  }
  updateOverview(id:string, data:any):Observable<any>{
    return this.http.post(`${environment.apiBaseURL}admin/overView/updateOverView/${id}`,data)
  }
}
