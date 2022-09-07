import { Component, OnInit } from '@angular/core';
import { MapaService } from '../../services/mapa.service';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit {

  vehiculos: [] = []

  constructor(private mapaService: MapaService) { }

  verVehiculos(){
    this.mapaService.getVehiculos().subscribe( resp => {
      this.vehiculos = JSON.parse(JSON.stringify(resp.data)) 
    })

  }
  ngOnInit(): void {
    this.verVehiculos()
  }

}
