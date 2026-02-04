import { Directive, ElementRef, Renderer2, inject } from '@angular/core';

@Directive({ selector: '[roundNames]' })
export class RoundNamesDirective {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);

  constructor() {
    this.renderer.addClass(this.el.nativeElement, 'd-flex-row')
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'margin-left 0.5s')
  }

  set offset(val: number) {
    this.renderer.setStyle(this.el.nativeElement, 'marginLeft', `-${val}px`)
  }

  get rect() {
    return this.el.nativeElement.getBoundingClientRect()
  }
}
