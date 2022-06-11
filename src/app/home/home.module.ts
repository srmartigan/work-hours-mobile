import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {BotoneraInicioPageModule} from '../components/botonera-inicio/botonera-inicio.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BotoneraInicioPageModule
  ],
  exports: [
    HomePage
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
