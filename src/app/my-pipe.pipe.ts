import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if(value){
      return 'Yes'
    }else
      return 'No'
  }

}
