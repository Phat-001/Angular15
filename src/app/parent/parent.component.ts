import { Component, SimpleChanges, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  public message: string = '';
  public notificationNumber: number = 0;
  public isIndeterminate: boolean = false;

  public countNumber: number = 0;
  @ViewChild('jack') jack: ChildComponent | undefined;
  @ViewChild('john') john: ChildComponent | undefined;
  @ViewChild('rockLee') rockLee: ChildComponent | undefined;

  @ViewChild('isClick') buttonToggle: any;

  public runSpinner (){
    this.isIndeterminate = true;
    setTimeout(() => this.isIndeterminate = false,3000)
  }
  public runParent ($event:any){
    this.message = `hi my son ${$event}`;
    console.log($event)
  }

  public handleSendMoney(){
    this.jack?.receiveMoney(30);
    this.john?.receiveMoney(40);
    this.rockLee?.receiveMoney(50);
  }

  public handleSetCount():void {
    this.countNumber = this.countNumber + 1;
  }

  public ngOnInit(): void{

  }

  public ngOnChanges(changes: SimpleChanges): void{
    console.log(changes)
  }

  public handleToggleButton():void{
    if (this.buttonToggle.checked) {
      console.log("Nút toggle đã được chọn");
    } else {
      console.log("Nút toggle không được chọn");
    }
  }
}
