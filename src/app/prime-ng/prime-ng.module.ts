import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { GMapModule } from 'primeng/gmap';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    GMapModule,
    MenubarModule,
    TableModule,
  ]
})
export class PrimeNgModule { }
