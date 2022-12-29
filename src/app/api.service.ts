import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) {

   }

  //  link API
  apiURL (){
    return 'http://localhost/api';
  }
  //  get data
  getSiswa(){
    return this.http.get(this.apiURL() + '/tampil.php');
  }

  deleteSiswa(id:any){
    return this.http.get(this.apiURL() + '/hapus.php?nis=' + id);
  }
  
  ambilSiswa(id:any){
    return this.http.get(this.apiURL() + '/lihat.php?nis=' + id);
  }

  register(user: User){
    return this.http.post(this.apiURL() + '/register', user);
  }

  login(credentials: User): Observable<string> {
    return this.http.post<{token: string}>(this.apiURL() + '/login', credentials).pipe(
      map(response => response.token)
    )
  }
  loginAdmin(credentials: User): Observable<string> {
    return this.http.post<{token: string}>(this.apiURL() + '/loginAdmin', credentials).pipe(
      map(response => response.token)
    )
  }
 
}
