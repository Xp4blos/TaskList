import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYellowHl]'
})
export class YellowHlDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow'
   }

}
