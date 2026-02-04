import { Component, inject } from '@angular/core';
import {ThemeSlides} from "../../config/theme-slides";
import {ThemeSlide} from "../../config/theme-slide";
import {Match} from "../../config/match";
import {ThemeSlideConfig} from "../../config/theme-slide-config";
import { ThemeSlideBackgroundDirective } from '../../common/theme-slide-background.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-theme-slide-editor',
    templateUrl: './theme-slide-editor.component.html',
    styleUrls: ['./theme-slide-editor.component.scss'],
    host: {
        class: 'p-3 d-flex-column'
    },
    imports: [ThemeSlideBackgroundDirective, ReactiveFormsModule, FormsModule, NgTemplateOutlet]
})
export class ThemeSlideEditorComponent {
  readonly match = inject(Match);


  get themes() {
    return ThemeSlides.Themes
  }

  addSlide(theme: ThemeSlide) {
    this.match.themeSlides.add(theme)
  }

  deleteSlide(slide: ThemeSlideConfig) {
    this.match.themeSlides.remove(slide)
  }
}
