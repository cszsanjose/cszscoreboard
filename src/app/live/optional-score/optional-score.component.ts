import { Component, inject } from '@angular/core';
import {Match} from "../../config/match";
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-optional-score',
    templateUrl: './optional-score.component.html',
    styleUrls: ['./optional-score.component.scss'],
    host: {
        class: 'd-flex-column align-items-center justify-content-center'
    },
    imports: [UpperCasePipe]
})
export class OptionalScoreComponent {
  readonly match = inject(Match);
}
