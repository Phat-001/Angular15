import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  public email:string = '';
  public password:number|null = null;

  constructor(private apiService:ApiService){}

  public submitForm():void{
    this.apiService.handleSubmitForm(this.email,this.password);
  }
}
