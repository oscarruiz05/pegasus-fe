import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivoComponent } from './pages/dispositivo/dispositivo.component';
import { DispositivosComponent } from './pages/dispositivos/dispositivos.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'full-sreen', component: FullScreenComponent },
      { path: 'zoom-range', component: ZoomRangeComponent },
      { path: 'marcadores/:id', component: MarcadoresComponent },
      { path: 'dispositivos', component: DispositivosComponent },
      { path: 'dispositivo/:id', component: DispositivoComponent },
      { path: '**', redirectTo: 'dispositivos' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapasRoutingModule {}
