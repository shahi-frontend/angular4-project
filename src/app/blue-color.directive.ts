import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColorDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'blue';
   }

  //  @HostListener('click') doSomething() {
  //    console.log('DOM element is clicked');
  //  }

  @HostListener ('document:click', ['$event'])
   elemClicked(elem) {
     console.log('clicked', elem);
   }

}
