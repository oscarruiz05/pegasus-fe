import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivosComponent } from './pages/dispositivos/dispositivos.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'full-sreen', component: FullScreenComponent},
      {path: 'zoom-range', component: ZoomRangeComponent},
      {path: 'marcadores', component: MarcadoresComponent},
      {path: 'dispositivos', component: DispositivosComponent},
      {path: '**', redirectTo: 'full-sreen'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
