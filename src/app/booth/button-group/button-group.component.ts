import {Component, Input, ViewEncapsulation, input, output, viewChildren} from '@angular/core';
import { ButtonGroupItemDirective } from './button-group-item.directive';

@Component({
    selector: 'app-button-group',
    templateUrl: './button-group.component.html',
    styleUrls: ['./button-group.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'rounded d-flex flex-nowrap align-items-stretch justify-content-stretch'
    }
})
export class ButtonGroupComponent {
  readonly title = input<string>();
  _selectedValue?: any
  readonly selectedValueChange = output<any>();

  readonly items = viewChildren(ButtonGroupItemDirective);

  @Input()
  set selectedValue(val: any) {
    this._selectedValue = val
    this.selectedValueChange.emit(val)
  }

  get selectedValue() {
    return this._selectedValue
  }

  clicked(value: any) {
    this.selectedValue = value
  }
}
