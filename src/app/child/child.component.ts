import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() name:string = '';
  @Output() childCalling: EventEmitter<any>= new EventEmitter();
  public money:number = 0;
  public callParent(){
    this.childCalling.emit(this.name);
  }

  public receiveMoney(money:number):void{
    this.money = money;
  }
}
