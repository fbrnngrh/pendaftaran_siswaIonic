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
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage  {

  constructor(
    private router: Router,
    public _apiService: ApiService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }


  async onLogout() {
    const loading = await this.loadingController.create({
      message: 'Loading....',
    });
    await loading.present();
    this.router.navigateByUrl('/auth');
    loading.dismiss();
  }
}
