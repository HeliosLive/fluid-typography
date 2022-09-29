import { NgModule } from '@angular/core';

import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';

import { sharedIcons } from './shared-icons';

@NgModule({
  imports: [AngularSvgIconModule.forRoot()],
})
export class SvgRegisterModule {
  constructor(private iconReg: SvgIconRegistryService) {
    /* shared */
    this.iconReg
      .loadSvg(
        `assets/svg/icons/${sharedIcons.loading}.svg`,
        sharedIcons.loading
      )
      ?.subscribe();
  }
}
