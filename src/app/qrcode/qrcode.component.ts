import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QRCodeComponent {
  public qrText:string = 'https://angular.io/guide/form-validation';
  constructor (private api: ApiService){}

}
