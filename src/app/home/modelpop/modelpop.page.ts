import { Component, OnInit,Input } from '@angular/core';
import {NavParams, ModalController } from '@ionic/angular';
import { FormGroup, Validators , FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../api.service';
@Component({
  selector: 'app-modelpop',
  templateUrl: './modelpop.page.html',
  styleUrls: ['./modelpop.page.scss'],
})
export class ModelpopPage implements OnInit {
  confirmationForm: FormGroup;
  loading:boolean=false;
   @Input() name:string;
  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private router: Router,
    private api: ApiService
  ) { 
    this.confirmationForm = new FormGroup({
      'code_1': new FormControl('', Validators.compose([
        Validators.required,
      ])),
      'code_2': new FormControl('', Validators.compose([
        Validators.required,
      ])),
      'code_3': new FormControl('', Validators.compose([
        Validators.required,
      ]))
      ,'code_4': new FormControl('', Validators.compose([
        Validators.required,
      ])) 
    });

  }

  ngOnInit() {
  }
  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  confirmPasswordCode(testData){
    console.log(testData);
   
    let data={
      format:"input",
      user_id: 'CCPL-'+testData.code_1.toUpperCase()+testData.code_2.toUpperCase()+'-'+testData.code_3+testData.code_4,
    }
    console.log(data);
    this.loading= true;
    this.api.login(data).subscribe(result=> {
      this.loading = false;
      if(result['status'] == 'ok'){
      this.api.successToast(result["message"]);
      this.confirmationForm.reset();
      this.router.navigate(['/home']);
      console.log(result);
      }else if (result["status"] == "error") {
        this.api.errorToast(result["message"]);
      }
      err => {
         this.api.errorToast(err["error"]["message"]);
      }
     });
 }
  moveFocus(event, nextElement, previousElement) {
    if (event.keyCode == 8 && previousElement) {
      previousElement.setFocus();
    }  
    if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 65 && event.keyCode<= 90 ) {
      
      // event.keyCode = event.keyCode + 32
      if (nextElement) {
        nextElement.setFocus();
      }
    }
     else {
      event.path[0].value = '';
    }
  }
  
}
