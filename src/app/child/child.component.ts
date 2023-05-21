import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() name:string = '';
  @Input() color:string = '';
  @Input() countNumber:string = '';
  @Output() childCalling: EventEmitter<any>= new EventEmitter<any>();


  public money:number = 0;

  public callParent(){
    this.childCalling.emit(this.name);
  }

  public receiveMoney(money:number):void{
    this.money = money;
    this.name = 'phat';
    console.log('component đã gọi vào trong này')
    console.log(this.countNumber);
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes)
  }
}
