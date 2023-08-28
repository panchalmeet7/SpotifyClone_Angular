import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  constructor(private e1: ElementRef) {
    setInterval(() => {
      this.e1.nativeElement.style.backgroundColor = 'red';
    }, 1000);
  }
}
