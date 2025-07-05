// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  createUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user`, data);
  }
}