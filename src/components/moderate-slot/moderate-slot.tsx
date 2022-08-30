import { Component, Host, h } from '@stencil/core';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'moderate-slot': {};
    }
  }
}
@Component({
  tag: 'moderate-slot',
  styleUrl: 'moderate-slot.css',
  shadow: true,
})
export class ModerateSlot {
  render() {
    return (
      <Host>
        {[
          <div class={'start'}>
            <slot name="start" />
          </div>,
          <h1>{'⬆️slot测试⬇️'}</h1>,
          <div class={'start'}>
            <slot name="end" />
          </div>,
        ]}
      </Host>
    );
  }
}
