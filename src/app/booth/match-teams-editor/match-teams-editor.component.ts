import { Component, inject } from '@angular/core';
import {Match} from "../../config/match";
import {Profiles} from "../../config/profiles";
import {TeamLogo} from "../../config/profile";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IconSelectorComponent } from '../../common/icon-selector/icon-selector.component';

@Component({
    selector: 'app-match-teams-editor',
    templateUrl: './match-teams-editor.component.html',
    host: {
        class: 'd-flex-column gap-3'
    },
    imports: [ReactiveFormsModule, FormsModule, IconSelectorComponent]
})
export class MatchTeamsEditorComponent {
  readonly match = inject(Match);
  readonly profiles = inject(Profiles);


  get blueLogo(): string | undefined {
    return this.match.profile.teams.blueLogp
  }

  set blueLogo(value: string | undefined) {
    this.match.profile.teams.blueLogp = value as TeamLogo
  }

  get redLogo(): string | undefined {
    return this.match.profile.teams.redLogo
  }

  set redLogo(value: string | undefined) {
    this.match.profile.teams.redLogo = value as TeamLogo
  }
}
