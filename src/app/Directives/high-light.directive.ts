import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input() appHighLight = 'blue';
  constructor(private e:ElementRef) {}
  ngOnInit():void{
    this.e.nativeElement.style.color = this.appHighLight
  }
}
