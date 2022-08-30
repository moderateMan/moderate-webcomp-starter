import { newSpecPage } from '@stencil/core/testing';
import { ModerateSlot } from '../moderate-slot';

describe('moderate-slot', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModerateSlot],
      html: `<moderate-slot></moderate-slot>`,
    });
    expect(page.root).toEqualHtml(`
      <moderate-slot>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </moderate-slot>
    `);
  });
});
