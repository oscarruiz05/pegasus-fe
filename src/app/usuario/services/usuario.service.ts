import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _apiUrl: string = 'https://api.pegasusgateway.com'
  private _apiKey: string = '8033aabb7fb292fa59efe5239f220456b0a823262911be620028cdbd'

  constructor(private http: HttpClient) {

  }

  getUsuarioPegasus(): Observable<any> {

    const url = `${this._apiUrl}/users`

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('authenticate', this._apiKey)

    return this.http.get(url, { headers });
  }
}
