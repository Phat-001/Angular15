import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  public email:string = '';
  public password:number|null = null;
  public result:any = null;
  constructor(private apiService:ApiService){}

  public submitForm():void{
    this.apiService.handleSubmitForm(this.email,this.password);
  }

  numbersList = of(1,2,3,4,5,6,7,8,9,10,40);

  myObservable = new Observable(observer => {
    observer.next('Hello');
    observer.next('World');
    observer.complete();
    observer.next('World2');

  });

  ngOnInit():void {
    this.numbersList.subscribe(result => console.log(result,'haha'));

    this.numbersList.subscribe((value)=> {
      this.result = [value];
    })

    this.myObservable.pipe(map((value:any)=>value.toUpperCase())).subscribe(value => console.log(value));
  }

  
  
  
  
}
