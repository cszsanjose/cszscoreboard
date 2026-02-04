import { Component, inject } from '@angular/core';
import {Match} from "../../config/match";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-match-rounds-editor',
    templateUrl: './match-rounds-editor.component.html',
    host: {
        class: 'd-flex-column gap-3'
    },
    imports: [ReactiveFormsModule, FormsModule]
})
export class MatchRoundsEditorComponent {
  readonly match = inject(Match);

  private _rounds: string

  constructor() {
    const match = this.match;

    this._rounds = match.round.names.join("\n")
  }

  get rounds() {
    return this._rounds
  }

  set rounds(val: string) {
    this._rounds = val
    this.match.round.names = val.split("\n").map(s => s.trim()).filter(s => s.length > 0)
  }
}
