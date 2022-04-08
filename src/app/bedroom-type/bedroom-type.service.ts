import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BedroomTypeService {

  constructor(private http:HttpClient) { }
  getbedroom(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/bedRoom/allBedRoomType`);
  }
  createbedroom(bedroom:FormData): Observable<any> {
    return this.http.post(`${environment.apiBaseURL}admin/bedRoom/addBedRoomType`,bedroom);
  }
  deletebedroom(id:string): Observable<any> {
    return this.http.delete(`${environment.apiBaseURL}admin/bedRoom/deleteBedRoomType/${id}`);
  }
  updateBedRoomtype(id:string, data:any):Observable<any>{
    return this.http.put(`${environment.apiBaseURL}admin/bedRoom/updateBedRoomType/${id}`,data)
  }
}
