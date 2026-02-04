import {Component} from '@angular/core';
import { InputModalComponent } from './common/input-modal/input-modal.component';
import { RouterOutlet } from '@angular/router';
import { DebugInfoComponent } from './common/debug-info/debug-info.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [InputModalComponent, RouterOutlet, DebugInfoComponent]
})
export class AppComponent {
}
