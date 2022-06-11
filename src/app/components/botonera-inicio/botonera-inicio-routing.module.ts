import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotoneraInicioPage } from './botonera-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: BotoneraInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotoneraInicioPageRoutingModule {}
