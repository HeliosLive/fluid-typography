import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { PaletteComponent } from './palette.component';

import type { Color } from '@shared/models/color.type';
import type { Size } from '@shared/models/size.type';

describe('PaletteComponent', () => {
  const props = {
    size: 'h1' as Size,
    color: 'info' as Color,
    for: 'some-element',
    ellipsis: true,
    pointer: true,
    underline: true,
    disabled: true,
    testId: 'label-test-id',
  };

  let spectator: Spectator<PaletteComponent>;
  const createComponent = createComponentFactory({
    component: PaletteComponent,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent({
      props,
    });
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should color data attribute equals to color input', () => {
    const attribute = spectator.element?.getAttribute('data-color');

    expect(attribute).toEqual(props.color);
  });
});
