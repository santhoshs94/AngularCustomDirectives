import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'url';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format;
  constructor(private elementRef: ElementRef) { }

  // @HostListener('focus') onfocus() {
  //   const value: string = this.elementRef.nativeElement.value;
  //   this.elementRef.nativeElement.value = value.toLocaleUpperCase();
  // }

  @HostListener('blur') onblur() {
    const value: string = this.elementRef.nativeElement.value;
    if (this.format === 'lowercase') {
      this.elementRef.nativeElement.value = value.toLocaleLowerCase();
    } else {
      this.elementRef.nativeElement.value = value.toLocaleUpperCase();
    }
 }
}
