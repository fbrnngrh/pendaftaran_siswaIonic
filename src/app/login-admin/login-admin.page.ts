import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage {

  constructor(
    private router: Router,
    public _apiService: ApiService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  async onSubmit() {
    const loading = await this.loadingController.create({
      message: 'Loading....',
    });
    await loading.present();

    this._apiService.loginAdmin(this.form.value).subscribe(
      // If success
      async (token) => {
        localStorage.setItem('token', token);
        loading.dismiss();
        this.router.navigateByUrl('/siswa-baru');
      },
      async () => {
        const alert = await this.alertController.create({
          header: 'Login Failed',
          message: 'Username or Password is incorrect',
          buttons: ['OK'],
        });
        await alert.present();
        loading.dismiss();
      }
    );
  }

}
