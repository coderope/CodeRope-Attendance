import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelpopPageRoutingModule } from './modelpop-routing.module';

import { ModelpopPage } from './modelpop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModelpopPageRoutingModule
  ],
  declarations: [ModelpopPage]
})
export class ModelpopPageModule {}
