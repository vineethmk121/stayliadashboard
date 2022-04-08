import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }
  getAllProperties(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/property/allPropertties`);
  }
  getCountries(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/nationality/allNationality`);
  }
  propertyType(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/propertyType/allPropertyTypes`);
  }
  getAllOverview(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/overView/allOverViews`);
  }
  getAmenities(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/amenity/allAmenity`);
  }
  getbedroom(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/bedRoom/allBedRoomType`);
  }
  furnishingType(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/furnish/allFurnishTypes`);
  }
  getAlltags(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/tag/allTags`);
  }
  getPropertyCat(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/propertyType/allPropertyTypes`);
  }
  getAgent(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/users/listofAgents`);
  }
  createNewProperty(property:FormData):Observable<any>{
    return this.http.post(`${environment.apiBaseURL}admin/property/addProperty`,property)
  }
}
