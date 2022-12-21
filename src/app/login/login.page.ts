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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) {}

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

 async onSubmit(){
    const loading = await this.loadingController.create({message: 'Loading....'});
    await loading.present();

    this._apiService.login(this.form.value).subscribe(
      // If success
      async token => {
        localStorage.setItem('token', token);
        loading.dismiss();
        this.router.navigateByUrl('/siswa');
      },
     async () => {
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Username or Password is incorrect',
        buttons: ['OK']
      })
      await alert.present();
      loading.dismiss();
     }
    );
  }
}
