import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahSiswaPageRoutingModule } from './tambah-siswa-routing.module';

import { TambahSiswaPage } from './tambah-siswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahSiswaPageRoutingModule
  ],
  declarations: [TambahSiswaPage]
})
export class TambahSiswaPageModule {}
