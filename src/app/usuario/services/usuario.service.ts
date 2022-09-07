import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private _apiUrl: string = 'https://api.pegasusgateway.com';
  private _apiKey: string =
    '97e2713f69f1bd1581904c8aa8cd3365164cebb6c6a837b5170475f0';

  constructor(private http: HttpClient) { }

  getUsuarioPegasus(): Observable<any> {
    const url = `${this._apiUrl}/users`;

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('authenticate', this._apiKey);

    return this.http.get(url, { headers });
  }
}
