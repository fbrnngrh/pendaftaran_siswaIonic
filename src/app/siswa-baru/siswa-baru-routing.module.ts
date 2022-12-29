import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiswaBaruPage } from './siswa-baru.page';

const routes: Routes = [
  {
    path: '',
    component: SiswaBaruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiswaBaruPageRoutingModule {}
