import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

import type { Color } from '@shared/models/color.type';
import type { Size } from '@shared/models/size.type';

@Component({
  selector: 'hls-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  @Input() for?: string;
  @Input()
  @HostBinding('attr.data-cy')
  testId?: string;

  @Input()
  @HostBinding('attr.data-size')
  size: Size = 'p1';

  @Input()
  @HostBinding('attr.data-color')
  color: Color = 'info';

  @Input()
  @HostBinding('attr.data-ellipsis')
  ellipsis?: boolean;

  @Input()
  @HostBinding('attr.data-underline')
  underline?: boolean;

  @Input()
  @HostBinding('attr.data-disabled')
  disabled?: boolean;

  @Input()
  @HostBinding('attr.data-pointer')
  pointer?: boolean;
}
