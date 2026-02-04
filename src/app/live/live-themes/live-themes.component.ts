import { Component, inject } from '@angular/core';
import {Match} from "../../config/match";
import {ThemeSlides} from "../../config/theme-slides";
import {ThemeSlideType} from "../../config/theme-slide";
import { ThemeSlideBackgroundDirective } from '../../common/theme-slide-background.directive';
import { ThemeSlideTitleDirective } from '../../common/theme-slide-title.directive';
import { NgStyle } from '@angular/common';
import { ColoredImageComponent } from '../../common/colored-image/colored-image.component';

@Component({
    selector: 'app-live-themes',
    templateUrl: './live-themes.component.html',
    styleUrls: ['./live-themes.component.scss'],
    imports: [ThemeSlideBackgroundDirective, ThemeSlideTitleDirective, NgStyle, ColoredImageComponent]
})
export class LiveThemesComponent {
  readonly match = inject(Match);


  get themeConfig() {
    return this.match.themeSlides.activeConfig
  }

  get theme() {
    return ThemeSlides.byName(this.themeConfig.name)
  }

  get movie() {
    return this.theme.type === ThemeSlideType.Movie
  }

  get movieStyle() {
    const theme = this.theme
    return {
      color: theme.title.color
    }
  }
}
