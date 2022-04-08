import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http:HttpClient) { }
  getFaq(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}admin/faq/allFaqs`);
  }
  deleteFaq(id:string):Observable<any>{
    return this.http.delete(`${environment.apiBaseURL}admin/faq/deleteFaq/${id}`)
  }
}
