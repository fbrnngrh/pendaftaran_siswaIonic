import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiswaTambahPage } from './siswa-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: SiswaTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiswaTambahPageRoutingModule {}
