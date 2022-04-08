import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AmenitiesService {

  constructor(private http:HttpClient) { }
  getAmenities(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/amenity/allAmenity`);
  }
  createAmenities(amenties:FormData):Observable<any>{
    return this.http.post(`${environment.apiBaseURL}admin/amenity/addAmenity`,amenties)
  }
  deleteAmenities(id:string):Observable<any>{
    return this.http.delete(`${environment.apiBaseURL}admin/amenity/deleteAmenity/${id}`)
  }
  updateAmenties(id:string, data:any):Observable<any>{
    return this.http.post(`${environment.apiBaseURL}admin/amenity/updateAmenity/${id}`,data)
  }
}
