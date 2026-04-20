import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  constructor(private element: ElementRef) {
   

  }
  //events native events

   @Input('appHighlight') color: string | null | undefined = 'yellow';
    @HostListener('mouseenter')
    onmouseenter(){
      this.element.nativeElement.style.backgroundColor=this.color;
      }
    @HostListener('mouseleave')
    onMouseLeave(){
      console.log('mouse left')
      this.element.nativeElement.style.backgroundColor= null;
    }
}
