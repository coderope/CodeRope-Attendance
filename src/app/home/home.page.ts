import { Component } from '@angular/core';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import {ApiService} from '../api.service';
import { NavController, AlertController,LoadingController , ModalController } from "@ionic/angular";
import {ModelpopPage} from '../home/modelpop/modelpop.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(private barcodeScanner: BarcodeScanner, private api: ApiService, private modalController: ModalController ) {
 
}
scan() {

  let opt:BarcodeScannerOptions={
    formats : "QR_CODE,CODE_128",
    prompt:"Place a barcode/QR Code inside the scan area",
  }
  this.barcodeScanner.scan(opt).then(barcodeData => {
   let data={
     user_id:barcodeData['text'],
     format:barcodeData.format
   };
   this.api.login(data).subscribe(result=> {
      if(result['status'] == 'ok'){
        this.api.successToast(result["message"]);
       }else if (result["status"] == "error") {
        this.api.errorToast(result["message"]);
      }
      err => {
      
        //console.log(err);
        this.api.errorToast(err["error"]["message"]);
      }
     });
    }).catch(err => {
      console.log('Error', err);
  });
 
  }
  async showDetails() {
    // console.log()
    const modal = await this.modalController.create({
      component: ModelpopPage,
      cssClass: 'my-custom-class',
      componentProps:{
        "name":"mamata"
       }
      });
    return await modal.present();
  }
}
