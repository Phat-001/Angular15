import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  public message: string = '';
  @ViewChild('jack') jack: ChildComponent | undefined;
  @ViewChild('john') john: ChildComponent | undefined;
  @ViewChild('rockLee') rockLee: ChildComponent | undefined;


  public runParent (name:string){
    this.message = `hi my son ${name}`;
  }

  public handleSendMoney(){
    this.jack?.receiveMoney(30);
    this.john?.receiveMoney(40);
    this.rockLee?.receiveMoney(50);
  }
}
