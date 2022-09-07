import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MapaService } from '../../services/mapa.service';

import * as Mapboxgl from 'mapbox-gl';

type Vehiculo = {
  lat: number;
  lon: number;
};

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.css'],
})
export class DispositivoComponent implements OnInit {
  vehiculo: Vehiculo = {
    lat: 0,
    lon: 0,
  };

  mapa!: Mapboxgl.Map;

  constructor(
    private activateRoute: ActivatedRoute,
    private mapaService: MapaService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.mapaService.verInformacionVehiculo(id)))
      .subscribe(({ device }) => {
        const {
          latest: { loc },
        } = device;
        this.vehiculo = loc;

        const { lat, lon } = this.vehiculo;

        this.mapa = new Mapboxgl.Map({
          accessToken: environment.mapboxKey,
          container: 'mapa-mapbox', // container ID
          // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
          style: 'mapbox://styles/mapbox/satellite-v9', // style URL
          center: [lon, lat], // starting position
          zoom: 16.6, // starting zoom
        });

        this.crearMarcador(lon, lat);
      });
  }

  crearMarcador(lng: number, lat: number) {
    const marker = new Mapboxgl.Marker({
      draggable: false,
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);
  }
}
