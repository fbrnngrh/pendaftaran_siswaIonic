import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Http } from '@capacitor-community/http';


@Component({
  selector: 'app-siswa-tambah',
  templateUrl: './siswa-tambah.page.html',
  styleUrls: ['./siswa-tambah.page.scss'],
})
export class SiswaTambahPage implements OnInit {

  nis: any;
  nama: any;
  alamat_siswa: any;
  no_telp: any;
  pendidikan_terakhir: any;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    public _apiService: ApiService,
    public alertController: AlertController,
    public loadingController: LoadingController,

  ) { }

  ngOnInit() {
  }

  addSiswa(){
    let url = this._apiService.apiURL() + '/tambah.php';
    Http.request({
      method: 'POST',
      url: url,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        nis: this.nis,
        nama: this.nama,
        alamat_siswa: this.alamat_siswa,
        no_telp: this.no_telp,
        pendidikan_terakhir: this.pendidikan_terakhir
      },
    }).then((data)=> {
      this.nis = '';
      this.nama = '';
      this.alamat_siswa = '';
      this.no_telp = '';
      this.pendidikan_terakhir = '';
      this.alertController.create({
        header: 'Nontifikasi',
        message: 'Data berhasil ditambahkan',
        buttons: ['OK']
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/siswa');
    }, (error) => {
      this.alertController.create({
        header: 'Nontifikasi',
        message: 'Data gagal ditambahkan',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    });
  }
}
