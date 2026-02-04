import { Directive, ElementRef, Input, inject } from '@angular/core';
import {ButtonGroupComponent} from "./button-group.component";
import {Subscription} from "rxjs";

@Directive({ selector: '[buttonGroupItem]' })
export class ButtonGroupItemDirective {
  readonly el = inject(ElementRef);
  readonly buttonGroup = inject(ButtonGroupComponent);

  _value: any

  constructor() {
    const el = this.el;
    const buttonGroup = this.buttonGroup;

    el.nativeElement.classList.add('button-group-item')

    buttonGroup.selectedValueChange.subscribe((_value: any) => this.toggle())

    el.nativeElement.addEventListener('click', () => {
      buttonGroup.clicked(this.value)
    })
  }

  @Input('buttonGroupItem')
  set value(val: any) {
    this._value = val
    this.toggle()
  }

  get value() {
    return this._value
  }

  private toggle() {
    if (this.buttonGroup.selectedValue === this.value) {
      this.el.nativeElement.classList.add('selected')
    } else {
      this.el.nativeElement.classList.remove('selected')
    }
  }
}
