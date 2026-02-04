import { Component, ViewEncapsulation, inject } from '@angular/core';
import {Match} from "../../config/match";
import {Profiles} from "../../config/profiles";
import { NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { MatchTeamsEditorComponent } from '../match-teams-editor/match-teams-editor.component';
import { MatchRoundsEditorComponent } from '../match-rounds-editor/match-rounds-editor.component';
import { MatchProfileEditorComponent } from '../match-profile-editor/match-profile-editor.component';

type MatchTab = 'teams' | 'rounds' | 'profile'

@Component({
    selector: 'app-match-editor',
    templateUrl: './match-editor.component.html',
    styleUrls: ['./match-editor.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'p-3 d-flex-column'
    },
    imports: [NgTemplateOutlet, MatchTeamsEditorComponent, MatchRoundsEditorComponent, MatchProfileEditorComponent, TitleCasePipe]
})
export class MatchEditorComponent {
  match = inject(Match);
  profiles = inject(Profiles);

  readonly tabs: MatchTab[] = ['teams', 'rounds', 'profile']
  activeTab: MatchTab = 'teams'

}
