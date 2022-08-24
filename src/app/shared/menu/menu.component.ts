import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-users',
        routerLink: 'usuario/usuarios'
      },
      {
        label: 'Vehiculos',
        icon: 'pi pi-fw pi-car',
        routerLink: 'mapas/dispositivos'
      },
      {
        label: 'Obtener Informacion del Vechiculo',
        icon: 'pi pi-fw pi-info',
      },
      {
        label: 'Mapa',
        icon: 'pi pi-fw pi-map',
        routerLink: 'mapas/full-sreen'
      }
    ];
  }

}
