import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private apiUrl = 'http://localhost:9091/api/v1/';
  constructor(private http: HttpClient) { }
  postData(response: any): Observable<any> {
    // Make a POST request
    return this.http.post<any>(`${this.apiUrl}/endpoint`, response);
  }
}
