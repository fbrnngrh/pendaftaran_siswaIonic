import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiswaBaruPageRoutingModule } from './siswa-baru-routing.module';

import { SiswaBaruPage } from './siswa-baru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiswaBaruPageRoutingModule
  ],
  declarations: [SiswaBaruPage]
})
export class SiswaBaruPageModule {}
