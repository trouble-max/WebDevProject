import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthToken, Shop } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }

  getShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${this.BASE_URL}/api/shops`);
  }

}
