import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') toggle: boolean = false;

  //   @HostListener('click') click(eventData: Event) {
  //     this.toggle = !this.toggle;
  //   }

  @HostListener('document:click', ['$event']) click(eventData: Event) {
    this.toggle = this.elRef.nativeElement.contains(eventData.target)
      ? !this.toggle
      : false;
  }

  constructor(private elRef: ElementRef) {}
}
