import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarnesPageRoutingModule } from './carnes-routing.module';

import { CarnesPage } from './carnes.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarnesPageRoutingModule,
    ComponentesModule
  ],
  declarations: [CarnesPage]
})
export class CarnesPageModule {}
