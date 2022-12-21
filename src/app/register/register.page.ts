import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) {}

  form = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
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
    this._apiService.register(this.form.value).subscribe(
      // If success
      async () => {
        const toast = await this.toastController.create({
          message: 'User Created',
          duration: 2000,
          color: 'dark',
        });
        await toast.present();
        loading.dismiss();
        this.form.reset();
      },
      // If error
      async (error) => {
        const alert = await this.alertController.create({
          message: 'user not created',
          buttons: ['OK'],
        });
        await alert.present();
        loading.dismiss();
      }
    );
  }
}
