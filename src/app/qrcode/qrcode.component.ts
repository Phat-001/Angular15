import { Component } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QRCodeComponent {
  public qrText:string = 'https://angular.io/guide/form-validation';


}
