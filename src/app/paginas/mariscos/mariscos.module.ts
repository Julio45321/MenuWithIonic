import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MariscosPageRoutingModule } from './mariscos-routing.module';

import { MariscosPage } from './mariscos.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MariscosPageRoutingModule,
    ComponentesModule
  ],
  declarations: [MariscosPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MariscosPageModule {}
