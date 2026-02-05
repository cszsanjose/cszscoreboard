import {Component, inject} from '@angular/core';
import {InputModalComponent} from './common/input-modal/input-modal.component';
import {RouterOutlet} from '@angular/router';
import {DebugInfoComponent} from './common/debug-info/debug-info.component';
import {Match} from "./config/match";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [InputModalComponent, RouterOutlet, DebugInfoComponent],
  host: {
    '[style.--left-team-color]': 'match.profile.teams.leftColor',
    '[style.--right-team-color]': 'match.profile.teams.rightColor',
  }
})
export class AppComponent {
  protected readonly match = inject(Match);
}
