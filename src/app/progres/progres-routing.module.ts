import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgresPage } from './progres.page';

const routes: Routes = [
  {
    path: '',
    component: ProgresPage
  },
  //Added this path for the button to work konsta 2001353
  {
    path: 'input',
     loadChildren: () => import('../input/input.module').then(m => m.InputPageModule)
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgresPageRoutingModule {}
