import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelpopPage } from './modelpop.page';

const routes: Routes = [
  {
    path: '',
    component: ModelpopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelpopPageRoutingModule {}
