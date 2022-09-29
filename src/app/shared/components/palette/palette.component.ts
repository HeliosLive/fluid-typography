import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

import type { Color } from '@shared/models/color.type';

@Component({
  selector: 'hls-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaletteComponent {
  @Input()
  @HostBinding('attr.data-color')
  color!: Color;
}
