import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecialidadesPageRoutingModule } from './especialidades-routing.module';

import { EspecialidadesPage } from './especialidades.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecialidadesPageRoutingModule,
    ComponentesModule
  ],
  declarations: [EspecialidadesPage]
})
export class EspecialidadesPageModule {}
