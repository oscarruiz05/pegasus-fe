import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { DispositivosComponent } from './pages/dispositivos/dispositivos.component';
import { DispositivoComponent } from './pages/dispositivo/dispositivo.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    MiniMapaComponent,
    FullScreenComponent,
    MarcadoresComponent,
    ZoomRangeComponent,
    DispositivosComponent,
    DispositivoComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule,
    PrimeNgModule,
    RouterModule
  ],
  exports: [
    MiniMapaComponent,
    FullScreenComponent,
    MarcadoresComponent,
    ZoomRangeComponent,
    DispositivosComponent,
    DispositivoComponent
  ]
})
export class MapasModule { }
