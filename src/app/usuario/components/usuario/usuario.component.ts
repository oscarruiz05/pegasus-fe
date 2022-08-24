import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  users: [] = []

  constructor(private usuarioService: UsuarioService) { }

  verUsuarios(){
    this.usuarioService.getUsuarioPegasus().subscribe( resp => {
      this.users = JSON.parse(JSON.stringify(resp.data)) 
    })

  }
  ngOnInit(): void {
    this.verUsuarios()
  }


}
