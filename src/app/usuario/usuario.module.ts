import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AuthComponent } from './components/auth/auth.component';



@NgModule({
  declarations: [
    UsuarioComponent,
    AuthComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
