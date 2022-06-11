import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartePageRoutingModule } from './parte-routing.module';

import { PartePage } from './parte.page';
import { ComponentsModule} from '../components/components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartePageRoutingModule,
    ComponentsModule
  ],
  declarations: [PartePage]
})
export class PartePageModule {}
