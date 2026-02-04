import {Component, input, model, output} from '@angular/core';
import {NgTemplateOutlet, TitleCasePipe} from '@angular/common';

@Component({
    selector: 'app-icon-selector',
    templateUrl: './icon-selector.component.html',
    styles: [],
    imports: [NgTemplateOutlet, TitleCasePipe]
})
export class IconSelectorComponent {
  readonly selectedIcon = model<string>();
  readonly selectedIconChange = output<string>();
  readonly icons = input.required<string[]>();
}
