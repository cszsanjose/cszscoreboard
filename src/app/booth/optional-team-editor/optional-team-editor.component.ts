import { Component, inject } from '@angular/core';
import {Match} from "../../config/match";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-optional-team-editor',
    templateUrl: './optional-team-editor.component.html',
    host: {
        class: 'd-flex-column gap-3 p-3'
    },
    imports: [ReactiveFormsModule, FormsModule]
})
export class OptionalTeamEditorComponent {
  readonly match = inject(Match);


  enable() {
    this.match.teams.optionalEnabled = true
  }

  disable() {
    this.match.teams.optionalEnabled = false
  }
}
