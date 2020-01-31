import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionSheetPage } from './action-sheet.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    component: ActionSheetPage,
    children: [
      {
        path: 'alert',
        loadChildren: '../alert/alert.module#AlertPageModule' 

      }
    ]
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)

  ],
  declarations: [ActionSheetPage]
})
export class ActionSheetPageModule {}