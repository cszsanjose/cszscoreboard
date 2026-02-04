import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { Match } from './app/config/match';
import { ErrorHandler, isDevMode, importProvidersFrom } from '@angular/core';
import { DiagnosticService } from './app/diagnostic.service';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, NgOptimizedImage, ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerImmediately'
        })),
        Match.provider,
        { provide: ErrorHandler, useExisting: DiagnosticService }
    ]
})
  .catch(err => console.error(err));
