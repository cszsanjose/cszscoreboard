import { Component, OnInit, inject } from '@angular/core';
import {DiagnosticService, ErrorInfo} from "../diagnostic.service";
import {Cache} from "../config/cache";
import { DatePipe } from '@angular/common';

@Component({
    templateUrl: './error-screen.component.html',
    styleUrls: ['./error-screen.component.scss'],
    host: {
        class: 'd-flex-column p-3 gap-2 fullscreen overflow-y-auto text-bg-light'
    },
    imports: [DatePipe]
})
export class ErrorScreenComponent implements OnInit {
  private readonly diagnostics = inject(DiagnosticService);

  protected errors: ErrorInfo[] = []

  ngOnInit() {
    this.errors = this.diagnostics.errors
  }

  protected cacheReset() {
    Cache.reset()
    this.diagnostics.requestReload()
  }

  protected fullReset() {
    window.localStorage.clear()
    this.diagnostics.requestReload()
  }

  protected retry() {
    this.diagnostics.requestReload()
  }
}
