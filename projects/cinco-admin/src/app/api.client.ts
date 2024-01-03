// Angular Modules 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { ApiResponse } from './models/api-response';
import { UtilsService } from './utils/utilities-service';


@Injectable()
export class ApiService {
 
  

  private DOMAIN_URL = "http://192.168.0.156:9091/api/v1/";
  constructor(
    // Angular Modules 
    private http: HttpClient,private util:UtilsService
  ) { }
  public get(url: string): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(this.DOMAIN_URL + url);
  }
  public getWithToken(url: string): Observable<ApiResponse<any>> {

    return this.http.get<ApiResponse<any>>(this.DOMAIN_URL + url, { headers: new HttpHeaders({ 'No-Auth': 'false' }) });
  }
  public post(url: any, response: any) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'false' });
    return this.http.post(this.DOMAIN_URL + url, response);
  }
  // public put(url: string, response: any) {
  //   const accessToken=this.util.decrypt_Text(localStorage.getItem('token'));
  //   var reqHeader=new HttpHeaders({'Authorization':`Bearer ${accessToken}`})
   
  //   return this.http.put(this.DOMAIN_URL + url, response);
  //   // return this.http.put(url, response);
  // }
  public put(url: string, response: any) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'false' });
    return this.http.put(this.DOMAIN_URL + url,response);
   
}
  public delete(url: string, res: any) {
    return this.http.put(this.DOMAIN_URL + url, res);
    return this.http.delete(url, res);
  }

  login(url: any, email: any, password: any) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post<any>(this.DOMAIN_URL + url, {
      email: email,
      password: password
    }, { headers: reqHeader })
  }
  forgot(url: any, email: any) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post<any>(this.DOMAIN_URL + url, {
      mobileNumber: email,

    }, { headers: reqHeader })
  }
  register(url: any, body: any) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post<any>(this.DOMAIN_URL + url, body,
      { headers: reqHeader })
  }
  addBranch(url: any, body: any) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'False' });
    return this.http.post<any>(this.DOMAIN_URL + url, body,
      { headers: reqHeader })
  }


  addRole(url: any, body: any) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'False' });
    return this.http.post<any>(this.DOMAIN_URL + url, body,
      { headers: reqHeader })
  }
  addEmployee(url: any, body: any) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'False' });
    return this.http.post<any>(this.DOMAIN_URL + url, body,
      { headers: reqHeader })
  }
  addRooms(url: any, body: any) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'False' });
    return this.http.post<any>(this.DOMAIN_URL + url, body,
      { headers: reqHeader })
  }
  addBookingForm(url:any, body:any) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'False' });
    return this.http.post<any>(this.DOMAIN_URL + url, body,
      { headers: reqHeader })
  }
 
} 