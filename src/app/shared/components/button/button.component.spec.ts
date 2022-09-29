import { Component } from '@angular/core';

import { MockComponent } from 'ng-mocks';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import type { ButtonType } from './button.component';
import { ButtonComponent } from './button.component';

import type { Color } from '@shared/models/color.type';
import { LabelComponent } from '@shared/components/label/label.component';

@Component({
  selector: 'app-content-projection-test',
  template: `<hls-button>{{ projectedContent }}</hls-button>`,
})
export class ContentProjectionTestComponent {
  public projectedContent = 'Click';
}

describe('ButtonComponent', () => {
  const props = {
    type: 'primary' as ButtonType,
    loading: false,
    disabled: false,
    testId: 'button-test-id',
  };
  const labelColorMatch: Record<ButtonType, Color> = {
    primary: 'sun',
    secondary: 'info',
    danger: 'white',
  };

  let spectator: Spectator<ButtonComponent>;
  const createComponent = createComponentFactory({
    component: ButtonComponent,
    declarations: [MockComponent(LabelComponent)],
    shallow: true,
  });
  let ContentProjectionSpectator: Spectator<ContentProjectionTestComponent>;
  const createContentProjectionComponent = createComponentFactory({
    component: ContentProjectionTestComponent,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent({
      props,
    });
    ContentProjectionSpectator = createContentProjectionComponent({});
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should type data attribute equals to type input', () => {
    const attribute = spectator.element?.getAttribute('data-type');

    expect(attribute).toEqual('primary');
  });

  describe('label', () => {
    it('should display label if loading is false', () => {
      expect(spectator.query('button > hls-label')).toExist();
    });

    for (let [key, value] of Object.entries(labelColorMatch)) {
      it(`should label color equals to ${value} when button type is ${key}`, () => {
        spectator.component.type = key as ButtonType;
        spectator.detectChanges();
        spectator.detectComponentChanges();

        const label = spectator.query('button > hls-label', {
          read: LabelComponent,
        });

        expect(label?.color).toEqual(value);
      });
    }
  });

  it('should display icon if loading is true', () => {
    spectator.component.loading = true;
    spectator.detectComponentChanges();
    expect(spectator.query('button > svg-icon')).toExist();
  });

  it('should Host have data-cy attribute equals to testId input', () => {
    expect(spectator.element).toHaveAttribute('data-cy', props.testId);
    expect(spectator.element).not.toHaveAttribute(
      'data-cy',
      `wrong=${props.testId}`
    );
  });

  it('should display the projected content correctly', () => {
    const projectedElement: HTMLButtonElement | null =
      ContentProjectionSpectator.query('hls-button');

    expect(projectedElement?.textContent).toEqual(
      ContentProjectionSpectator.component.projectedContent
    );

    const newElement = '<p>new projected content</p>';
    ContentProjectionSpectator.component.projectedContent = newElement;
    ContentProjectionSpectator.detectChanges();
    expect(ContentProjectionSpectator.element.textContent).toEqual(newElement);
    expect(ContentProjectionSpectator.element.textContent).not.toEqual(
      newElement.repeat(2)
    );
  });
});
