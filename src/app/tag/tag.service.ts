import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http:HttpClient) { }
  getAlltags(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/tag/allTags`);
  }
  deleteTags(id:string): Observable<any> {
    return this.http.delete(`${environment.apiBaseURL}admin/tag/deleteTag/${id}`);
  }
  addTags(tag:FormData): Observable<any> {
    return this.http.post(`${environment.apiBaseURL}admin/tag/addTag`,tag);
  }
  updateTag(id:string, data:any):Observable<any>{
    return this.http.put(`${environment.apiBaseURL}admin/tag/updateTag/${id}`,data)
  }
}
