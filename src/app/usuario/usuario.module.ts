import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AuthComponent } from './components/auth/auth.component';
import { UsariosRoutingModule } from './usuarios-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    UsuarioComponent,
    AuthComponent
  ],
  imports: [
    UsariosRoutingModule,
    CommonModule,
    HttpClientModule,
    PrimeNgModule
  ]
})
export class UsuarioModule { }
