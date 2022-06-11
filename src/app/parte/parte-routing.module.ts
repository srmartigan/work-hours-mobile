import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartePage } from './parte.page';

const routes: Routes = [
  {
    path: '',
    component: PartePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartePageRoutingModule {}
