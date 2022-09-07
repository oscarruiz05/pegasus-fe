import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapaService {
  private _apiUrl: string = 'https://api.pegasusgateway.com';
  private _apiKey: string =
    '97e2713f69f1bd1581904c8aa8cd3365164cebb6c6a837b5170475f0';

  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<any> {
    const url = `${this._apiUrl}/vehicles`;

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('authenticate', this._apiKey);

    return this.http.get(url, { headers });
  }

  verInformacionVehiculo(id: number): Observable<any> {
    const urlCop = `https://cloud.pegasusgateway.com/api/vehicles/${id}`;

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('authenticate', this._apiKey);

    const paramsCop = new HttpParams().set('select', 'device:latest.loc');

    return this.http.get(urlCop, { headers, params: paramsCop });
  }

  verInfoVehiculo(id: number): Observable<any> {
    const url = `${this._apiUrl}/rawdata`;

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('authenticate', this._apiKey);

    const hora = new Date(Date.now()).setHours(0, 0, 0);
    const fechaActual = new Date();
    '2022-08-29'

    const params = new HttpParams()
      .set(
        'from',
        `${new Date(hora).toISOString().slice(0, 10)}T0${new Date(
          hora
        ).toLocaleTimeString()}`
      )
      .set(
        'to',
        `${fechaActual.toLocaleDateString(
          'en-CA'
        )}T${fechaActual.toLocaleTimeString()}`
      )
      .set('vehicles', id)
      .set('fields', 'lon,lat,ac,age,speed,mph,light_sensor,pc,btt_battery');

    return this.http.get(url, { headers, params });
  }
}
