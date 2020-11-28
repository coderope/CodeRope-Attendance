import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { ToastController } from '@ionic/angular';
const baseURL="https://codrope.com/"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,    private toastCtrl: ToastController, ) { }
  login(data){
    return this.http.post(baseURL + 'phpApi/products/read.php' ,data);
  }
  async errorToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      color: 'danger',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
  async successToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      color: 'dark',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
