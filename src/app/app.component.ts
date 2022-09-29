import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import type { Color } from '@shared/models/color.type';
import { APP_COLORS } from '@shared/models/color.type';
import { APP_SIZES } from '@shared/models/size.type';
import type { Theme } from '@shared/models/theme.type';
import { ThemeService } from '@shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  colors = APP_COLORS;
  sizes = APP_SIZES;
  selectedColor: Color = 'info';
  theme$!: Observable<Theme>;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.listenTheme();
    this.setObservers();
  }

  setColor(color: Color): void {
    this.selectedColor = color;
  }

  private listenTheme(): void {
    this.themeService.initialize();
    this.themeService.listen();
  }

  private setObservers(): void {
    this.theme$ = this.themeService.data$;
  }
}
