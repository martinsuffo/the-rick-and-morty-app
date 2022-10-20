import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ConfigService } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string;

  constructor(
    private http: HttpClient,
    configService: ConfigService
  ) {
    this.baseUrl = configService.baseUrl;
  }

  public getRequest(path: String): Observable<any> {
    console.log(this.baseUrl + path);
    
    return this.http.get<any>(this.baseUrl + path);
  }
}
