import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotoneraInicioPageRoutingModule } from './botonera-inicio-routing.module';

import { BotoneraInicioPage } from './botonera-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotoneraInicioPageRoutingModule
  ],
  exports: [
    BotoneraInicioPage
  ],
  declarations: [BotoneraInicioPage]
})
export class BotoneraInicioPageModule {}
