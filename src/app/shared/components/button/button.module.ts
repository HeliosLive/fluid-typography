import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { ButtonComponent } from './button.component';

import { HlsLabelModule } from '@shared/components/label/label.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, AngularSvgIconModule, HlsLabelModule],
  exports: [ButtonComponent],
})
export class HlsButtonModule {}
