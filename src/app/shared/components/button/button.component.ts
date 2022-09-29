import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

import type { Color } from '@shared/models/color.type';

export type ButtonType = 'primary' | 'secondary' | 'danger';

@Component({
  selector: 'hls-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input()
  @HostBinding('attr.data-type')
  type: ButtonType = 'primary';
  @Input()
  @HostBinding('attr.data-cy')
  testId?: string;

  get labelColor(): Color {
    switch (this.type) {
      case 'primary':
        return 'sun';
      case 'secondary':
        return 'info';
      case 'danger':
        return 'white';
    }
  }
}
