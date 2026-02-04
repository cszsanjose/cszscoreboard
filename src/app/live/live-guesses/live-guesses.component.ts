import { Component, HostBinding, ViewEncapsulation, inject, input } from '@angular/core';
import {GuessingService, GuessSlidePart} from "../../common/guessing.service";
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-live-guesses',
    templateUrl: './live-guesses.component.html',
    styleUrls: ['./live-guesses.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'd-flex-column align-items-stretch'
    },
    imports: [NgClass]
})
export class LiveGuessesComponent {
  readonly guessing = inject(GuessingService);

  private static LONG_LIST = 6
  private static LONGER_LIST = 9
  private static LONGEST_LIST = 17

  readonly index = input<number>();
  @HostBinding('class.fullscreen')
readonly fullscreen = input<boolean>(true);

  get slide() {
    const index = this.index();
    return index === undefined ?  this.guessing.selected : this.guessing.slides[index]
  }

  partClasses(part: GuessSlidePart) {
    const classes: any = {
      part: true,
      long: part.answers.length >= LiveGuessesComponent.LONG_LIST,
      longer: part.answers.length >= LiveGuessesComponent.LONGER_LIST,
      longest: part.answers.length >= LiveGuessesComponent.LONGEST_LIST
    }
    classes[`guess-style-${part.style}`] = true
    return classes
  }
}
