import { Component, inject } from '@angular/core';
import {Match} from "../../config/match";
import {Profiles} from "../../config/profiles";
import {ProfileLogo} from "../../config/profile";
import {BuildInfo} from "../../build-info";
import { IconSelectorComponent } from '../../common/icon-selector/icon-selector.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-match-profile-editor',
    templateUrl: './match-profile-editor.component.html',
    host: {
        class: 'd-flex-column gap-3'
    },
    imports: [IconSelectorComponent, ReactiveFormsModule, FormsModule, DatePipe]
})
export class MatchProfileEditorComponent {
  readonly match = inject(Match);
  readonly profiles = inject(Profiles);
  readonly buildInfo = inject(BuildInfo);


  get profileLogo(): string {
    return this.match.profile.logo
  }

  set profileLogo(value: string) {
    this.match.profile.logo = value as ProfileLogo
  }

  save() {
    if (window.confirm('This will overwrite profile defaults. Are you sure?')) {
      this.match.save()
    }
  }

  saveAs() {
    const newName = window.prompt('Please enter the new profile name', '')
    if (newName) {
      this.match.saveAs(newName)
    }
  }

  delete() {
    if (window.prompt('This action cannot be undone! Please type DELETE to confirm.', '') === 'DELETE') {
      this.match.delete()
    }
  }
}
