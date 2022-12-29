import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahSiswaPage } from './tambah-siswa.page';

const routes: Routes = [
  {
    path: '',
    component: TambahSiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahSiswaPageRoutingModule {}
