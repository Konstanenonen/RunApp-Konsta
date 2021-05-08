import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgresPageRoutingModule } from './progres-routing.module';

import { ProgresPage } from './progres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgresPageRoutingModule
  ],
  declarations: [ProgresPage]
})
export class ProgresPageModule {}
