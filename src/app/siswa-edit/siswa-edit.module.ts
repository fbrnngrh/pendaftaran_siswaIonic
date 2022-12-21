import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiswaEditPageRoutingModule } from './siswa-edit-routing.module';

import { SiswaEditPage } from './siswa-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiswaEditPageRoutingModule
  ],
  declarations: [SiswaEditPage]
})
export class SiswaEditPageModule {}
