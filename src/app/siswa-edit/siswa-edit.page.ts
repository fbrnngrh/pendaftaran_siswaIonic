import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-siswa-edit',
  templateUrl: './siswa-edit.page.html',
  styleUrls: ['./siswa-edit.page.scss'],
})
export class SiswaEditPage implements OnInit {
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
  ) { 
    this.route.params.subscribe((param: any) => {
      this.nis = param.nis;
      console.log(this.nis);
      this.ambilSiswa(this.nis);
    })
   }

  ngOnInit() {
  }

  ambilSiswa(nis: any){
    this._apiService.ambilSiswa(nis).subscribe((res:any) => {
      console.log('sukses', res);
      let siswa = res;
      this.nama = siswa.nama;
      this.alamat_siswa = siswa.alamat_siswa;
      this.no_telp = siswa.no_telp;
      this.pendidikan_terakhir = siswa.pendidikan_terakhir;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data')
    })
  }

  editSiswa(){
    let url = this._apiService.apiURL() + '/edit.php';
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
        message: 'Data berhasil diubah',
        buttons: ['OK']
      }).then(res => {
        res.present();
      });
      this.router.navigate(['/siswa']);
    }).catch((error) => {
      console.log('error', error);
      alert('gagal edit data')
    })
  }
}
