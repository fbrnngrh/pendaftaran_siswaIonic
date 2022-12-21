import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiswaTambahPageRoutingModule } from './siswa-tambah-routing.module';

import { SiswaTambahPage } from './siswa-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiswaTambahPageRoutingModule
  ],
  declarations: [SiswaTambahPage]
})
export class SiswaTambahPageModule {}
