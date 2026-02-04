import { Component, HostBinding, inject, input } from '@angular/core';
import {Match} from "../../config/match";
import {LiveViewComponent} from "../../live/live-view/live-view.component";
import { RoundNamesComponent } from '../round-names/round-names.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-rounds',
    templateUrl: './rounds.component.html',
    styleUrls: ['./rounds.component.scss'],
    host: {
        class: 'd-flex-row align-items-stretch overflow-hidden'
    },
    imports: [RoundNamesComponent, AsyncPipe]
})
export class RoundsComponent {
  readonly match = inject(Match);
  readonly live? = inject(LiveViewComponent, { optional: true });

  readonly editable = input<boolean>(false);

  get round() {
    return this.match.round
  }

  @HostBinding('class.round-edit')
  get hostRoundEditClass() {
    return this.editable()
  }
}
