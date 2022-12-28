import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'login',
    loadChildren:() => import('./login/login.module').then( m => m.LoginPageModule),
    pathMatch: 'full'
  },
  {
    path: 'siswa',
    loadChildren: () => import('./siswa/siswa.module').then( m => m.SiswaPageModule)
  },
  {
    path: 'siswa-tambah',
    loadChildren: () => import('./siswa-tambah/siswa-tambah.module').then( m => m.SiswaTambahPageModule)
  },
  {
    path: 'siswa-edit/:nis',
    loadChildren: () => import('./siswa-edit/siswa-edit.module').then( m => m.SiswaEditPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
