import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-siswa',
  templateUrl: './siswa.page.html',
  styleUrls: ['./siswa.page.scss'],
})
export class SiswaPage {
  nis: any;
  nama: any;
  alamat_siswa: any;
  no_telp: any;
  pendidikan_terakhir: any;

  siswa : any[]; // Array siswa


  constructor(
    public _apiService: ApiService,
    public alertController: AlertController,
    public loadigController: LoadingController,
  ) { 
    this.getSiswa();
    this.siswa = [];
   }

  ngOnInit() {
    console.log('cek jika jalan');
  }

  ionViewDidEnter(){
    console.log('cek jika berhasil');
    this.getSiswa();
  }

  getSiswa(){
    this._apiService.getSiswa().subscribe((res:any) => {
      console.log('sukses');
      this.siswa = res;
    },(error:any) => {
      console.log('error');
      this.alertController.create({
        header: 'Nontifikasi',
        message: 'Gagal mengambil data',
        buttons: ['OK']
      }).then(res => {
        res.present();
      })
    })
  }

  deleteSiswa(id:any){
    this.alertController.create({
      header: 'Perhatian',
      subHeader: 'Apakah anda yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('Batal', data);
          }
        },
        {
          text: 'Hapus',
          handler: (data: any) => {
            console.log('Hapus', data);
            this._apiService.deleteSiswa(id).subscribe((res:any) => {
              console.log('sukses',res);
              this.getSiswa();
            },(error:any) => {
              console.log('error');
              this.alertController.create({
                header: 'Nontifikasi',
                message: 'Gagal menghapus data',
                buttons: ['OK']
              }).then(res => {
                res.present();
              })
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }
}
