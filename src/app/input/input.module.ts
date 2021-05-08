import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { InputPageRoutingModule } from './input-routing.module';

import { InputPage } from './input.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, InputPageRoutingModule, ReactiveFormsModule],
  declarations: [InputPage],
})
export class InputPageModule {}
