import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostresPageRoutingModule } from './postres-routing.module';

import { PostresPage } from './postres.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostresPageRoutingModule,
    ComponentesModule
  ],
  declarations: [PostresPage]
})
export class PostresPageModule {}
