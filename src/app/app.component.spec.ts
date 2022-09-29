import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { asapScheduler, scheduled } from 'rxjs';

import { AppComponent } from './app.component';

import type { Color } from '@shared/models/color.type';
import { ThemeService } from '@shared/services/theme.service';
import type { Theme } from '@shared/models/theme.type';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let themeService: ThemeService;
  let selectedTheme: Theme = 'light';

  const createComponent = createComponentFactory({
    component: AppComponent,
    shallow: true,
    mocks: [ThemeService],
  });

  beforeEach(() => {
    spectator = createComponent();

    themeService = spectator.inject(ThemeService);

    themeService.initialize = jest.fn();
    themeService.listen = jest.fn();
    themeService.data$ = scheduled([selectedTheme], asapScheduler);
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call theme service methods for setting the theme', () => {
      jest.spyOn(themeService, 'initialize');
      jest.spyOn(themeService, 'listen');

      spectator.component.ngOnInit();

      expect(themeService.initialize).toHaveBeenCalled();
      expect(themeService.listen).toHaveBeenCalled();
    });

    it('should assign the theme data to the theme$ variable', () => {
      spectator.component.ngOnInit();

      spectator.component.theme$.subscribe((value: Theme) => {
        expect(value).toEqual(selectedTheme);
      });
    });
  });

  describe('setColor', () => {
    it('should set the selectedColor variable to passed color value', () => {
      const color: Color = 'danger';

      spectator.component.setColor(color);

      expect(spectator.component.selectedColor).toEqual(color);
    });
  });
});
