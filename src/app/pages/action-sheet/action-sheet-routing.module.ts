import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
  ComponentsModule,
  IonicModule
  ],
  exports: [RouterModule],
})
export class ActionSheetPageRoutingModule {}
