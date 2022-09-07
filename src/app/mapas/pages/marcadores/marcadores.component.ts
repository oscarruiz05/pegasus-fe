import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { MapaService } from '../../services/mapa.service';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css'],
})
export class MarcadoresComponent implements OnInit {
  loading: boolean = false;
  dispositivo: [] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private mapaService: MapaService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => {
          this.loading = true;
          return this.mapaService.verInfoVehiculo(id);
        })
      )
      .subscribe(({ events }) => {
        this.loading = false;
        this.dispositivo = events;
      });
  }
}
